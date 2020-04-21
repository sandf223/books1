import React from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';
import { MDBDataTable } from 'mdbreact';
import './App-table-MDB.css';
import data from './res.json'
import keys from './api-keys.jsx'

// for test
//console.log(keys.PRIVATE_KEY,'!PRIVATE_KEY');
//console.log(keys.PUBLIC_KEY,'!PUBLIC_KEY');
const fetch = require('node-fetch');
const crypto = require('crypto');
const ts = new Date().getTime();
const hash = crypto.createHash('md5').update(ts + keys.PRIVATE_KEY + keys.PUBLIC_KEY).digest('hex');

// 'https://gateway.marvel.com/v1/public/comics?apikey=${PUBLIC_KEY}&hash${hash}&ts=${ts}')
// https://gateway.marvel.com:443/v1/public/comics/1886?apikey=5155592d04ef469bf409b8f146919b82
// переход к магазину => {el.resourceURI + urlhash} там json 
// http://gateway.marvel.com/v1/public/comics/82970?apikey=5155592d04ef469bf409b8f146919b82&hash=479f3d7aef988fb9fbf4625655416eda&ts=1587468822188
// for marvel shop
// href={el.resourceURI + urlhash} 

//const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex');
let urlhash = "?apikey=" + keys.PUBLIC_KEY + "&hash=" + hash + "&ts=" + ts;
console.log(urlhash,'!urlhash');

const results = data.data.results;
const rows = results.map(el => {
  //debugger
  return {
    // заголовок комикса
    //title: el.title,
    title: <div>
            <p className='format'> {el.format} </p>
            <a className='title'> {el.title} </a>
              
           </div>,
    // ссылка на комикс
    //resourceURI: el.resourceURI,
    // тип издания
    format: el.format,
    // картинка
    thumbnail: <img src={el.thumbnail.path + "/portrait_xlarge.jpg"} />,
    description: <a className='description'>{el.description}</a>,
    titleHidden: el.title
  };
});

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Marvel-IMG',
        field: 'thumbnail'
      },
      {
        label: 'title',
        field: 'title',
        width: 150
      },
      {
        label: 'description',
        field: 'description',
        width: 150
      },
      {
        label: 'format',
        field: 'format',
        sort: 'asc',
        width: 0
      },
      {
        label: 'titleHidden',
        field: 'titleHidden',
        sort: 'asc',
        width: 0 
      }
    ],
    rows: rows
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;

/*
columns: [
      {
        label: 'title',
        field: 'title',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      }
    ],
    rows: [
      {
        title: 'Tiger Nixon',
        position: 'System Architect',
      },
      {
        title: 'Garrett Winters',
        position: 'Accountant',
      },
      {
        title: 'Ashton Cox',
        position: 'Junior Technical Author',
      }
    ]
*/