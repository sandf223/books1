import React from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';

import "./Style.css";

// components
import AppHeader from "./components/Header/AppHeader";
import SearchPanel from "./components/SeachPanel/SearchPanel";
import DatatablePage from "./components/Table/App-table-MDB";

import MySelect from "./components/SeachPanel/App-Select/App-Select";

import { Hash } from 'crypto';
import { tap, map, path, prop } from 'ramda';
import options from './components/SeachPanel/App-Select/App-Select-Items';

// READ https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react
// http://todomvc.com/examples/react/#/
// https://redux.js.org/basics/example
// https://www.npmjs.com/package/marvel

const  App = () => {
    return (
        <div className='body'>
            <AppHeader />
            <DatatablePage />
        </div>
    );    
};

ReactDOM.render(<App />, document.getElementById('root'));