import React from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';
import { MDBDataTable } from 'mdbreact';
import SearchPanel from "../SeachPanel/SearchPanel";
import MySelect from "../SeachPanel/App-Select/App-Select";
import './App-table-MDB.css';
import data from './res.json'
import keys from './api-keys.jsx'

import columns from './App-table-MDB-columns'
import { colors } from 'react-select/src/theme';

const MARVEL_URL = 'https://gateway.marvel.com/v1/public/';
//const MARVEL_URL = 'https://localhost/';// for test

const PUBLIC_KEY = '5155592d04ef469bf409b8f146919b82';
const fetch = require('node-fetch');
const crypto = require('crypto');
const ts = new Date().getTime();
const hash = crypto.createHash('md5').update(ts + keys.PRIVATE_KEY + keys.PUBLIC_KEY).digest('hex');


// base query       "https://gateway.marvel.com/v1/public/comics?apikey=..."
// advanced search  "https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=ant&apikey..."

class DatatablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      topic: "comics",
      titleStartsWith: "",
      pagination: { limit: 50, offset: 0, total: 0 }
    }
  }

  componentDidMount() {
    this.marvelQuerySearch();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.topic !== this.state.topic) || (prevState.titleStartsWith !== this.state.titleStartsWith)) {
      this.marvelQuerySearch();
    }
  }

  marvelQuerySearch() {
    const { topic, pagination , titleStartsWith} = this.state;
    const { offset, limit } = pagination;
    // https://developer.mozilla.org/en-US/docs/Web/API/URL
    const ts = new Date().getTime();
    const hash = crypto.createHash('md5').update(ts + keys.PRIVATE_KEY + keys.PUBLIC_KEY).digest('hex');
    const url = new URL(MARVEL_URL + topic);
    const searchParams = new URLSearchParams();
    if (titleStartsWith !== "") {
      searchParams.append("titleStartsWith", titleStartsWith);
    }
    searchParams.append("ts", ts);
    searchParams.append("apikey", PUBLIC_KEY);
    searchParams.append("hash", hash);
    searchParams.append("limit", limit);
    searchParams.append("offset", offset);

    url.search = searchParams.toString();
    return fetch(url)
      .then(async res => {
        //const data = JSON.parse(res);
        //console.log("data = ", await res.json());
        const json = await res.json();
        const { results } = json.data;
        this.setState({
          rows: results.map(el => {
            return {
              title: <div>
                <p className='format'> {el.format} </p>
                <a className='title'> {el.title} </a>
              </div>,

              format: el.format,
              thumbnail: <img src={el.thumbnail.path + "/portrait_xlarge.jpg"} />,
              description: <a className='description'>{el.description}</a>,
              titleHidden: el.title
            };
          })
        })
      });
  };

  onChangeTopic(event) {
    const topic = event.value;
    this.setState({ topic });
  }

  onChange(value) {
    //console.log('titleStartsWith= ', value);
    this.setState({ titleStartsWith: value });
  }

  render() {
    const { rows } = this.state;
    const data = {
      columns,
      rows
    };

    return (
      <>
        <div className='search-panel'>
          <SearchPanel onKeyPress={this.onChange.bind(this)} />
          <MySelect onChange={this.onChangeTopic.bind(this)} />
        </div>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
      </>
    );
  }
}

export default DatatablePage;