import React from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';

import "./Style.css";
import AppHeader from "./components/Header/AppHeader";
import SearchPanel from "./components/SeachPanel/SearchPanel";
//import BookList from "./components/Book-List";
import TabsFilters from "./components/SeachPanel/App-Tabs-Filters";
import DatatablePage from "./components/Table/App-table-MDB";

import { Hash } from 'crypto';
import { tap, map, path, prop } from 'ramda';

// READ https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react
// http://todomvc.com/examples/react/#/
// https://redux.js.org/basics/example

const  App = () => {

    const appData = [
        { label: '1-a', important: false, id: 1 },
        { label: '2-b', important: true, id: 2 },
        { label: '3-c', important: true, id: 3 },
        { label: '4-d', important: false, id: 4 }
    ];

    return (
        <div className='body'>
            <AppHeader />
            <div class='search-panel'>
                <SearchPanel />
                <TabsFilters />
            </div>
            <DatatablePage />
        </div>
    );
};

//******              <BookList dates={appData} />
// (https://gateway.marvel.com:443/v1/public/ )-URL  ( comics?titleStartsWith= )-StandartSearch + ${SEARCH} + &apikey=...
// fetch('${URL} + ${StandartSearch} + ${SEARCH} + '&apikey=' + ${PUBLIC_KEY} + '&hash' + ${hash}&ts=${ts}')
/*
const fetch = require('node-fetch');
const crypto = require('crypto');
const PRIVATE_KEY = '30d44ba4bafbe1f403a90eda61dd4bc3cfbbb64d';
const PUBLIC_KEY = '5155592d04ef469bf409b8f146919b82';
const URL = 'https://gateway.marvel.com:443/v1/public/';
const StandartSearch = 'comics?titleStartsWith=';
var SEARCH = document.getElementById('search').value;



async function main() {
    const ts = '100';

    const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex');
    fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=${PUBLIC_KEY}&hash${hash}&ts=${ts}')
        .then(res => res.json())
        .then(tap(console.log))
        .then(path(['data', 'results']))
        .then(map(prop('title')))
        .then(tap(console.log));
}
*/


const MARVEL_URL = 'https://gateway.marvel.com/v1/public/';
const fetch = require('node-fetch');
const crypto = require('crypto');
const PRIVATE_KEY = '30d44ba4bafbe1f403a90eda61dd4bc3cfbbb64d';
const PUBLIC_KEY = '5155592d04ef469bf409b8f146919b82';


function marvelQuerySearch(topic) {
    // https://developer.mozilla.org/en-US/docs/Web/API/URL
    const ts = new Date().getTime();
    console.log(ts, 'ts');

    const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex');
    console.log(hash, 'hash');

    const url = new URL(MARVEL_URL + topic);
    console.log(url, 'url');

    const searchParams = new URLSearchParams();

    searchParams.append("ts", ts);

    searchParams.append("apikey", PUBLIC_KEY);

    searchParams.append("hash", hash);

    url.search = searchParams.toString();

    console.log(url.toString(),'!'); // <------
    // $ curl "https://dsfasdf" > ./res.json
    // pwd
    // "https://gateway.marvel.com/v1/public/comics?ts=1587129143793&apikey=5155592d04ef469bf409b8f146919b82&hash=8cc79802997a84d24bd1d92939de85ee"
    //
    return fetch(url)
        .then(res => res.json());
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("search").addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            //searchBook ();
            radiofilters();
            main();
            //console.log(document.getElementById('search').value);
        }
    });
    //document.getElementsByName("tab").addEventListener('onchange', radiofilters);
});

async function main() {
    const valueSearch = document.getElementById('search').value;
    console.log(valueSearch,'valueSearch');
    
    const result = await marvelQuerySearch('comics')
        .then(path(['data', 'results']));

    // For images https://developer.marvel.com/documentation/images

    //console.log(JSON.stringify(result));
};

function radiofilters() {
    var rads = document.querySelectorAll('tab');

    return 'comics';
    // return rads.filter(e => e.checked)[0];

    // for (var i=0;i<rad.length; i++) {
    //     if (rad[i].checked) {
    //         //console.log(rad[i].value);
    //         return rad[i].value;
    //     };
    // };
};

function searchBook () {
    console.log(URL + 'comics?' +  document.getElementById('search').value);
};



ReactDOM.render(<App />, document.getElementById('root'));