import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import BookList from "./components/Book-List";

const  App = () => {

    const appData = [
        { label: '1-a', important: false, id: 1 },
        { label: '2-b', important: true, id: 2 },
        { label: '3-c', important: true, id: 3 },
        { label: '4-d', important: false, id: 4 }
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <BookList dates={appData} />
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
//******
const requestURL = 'http://openlibrary.org/search.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
//api
//const api = 'AIzaSyBwUlsH2m50aiDTWbNjlUEtIr_SnRN8MiQ';
//const url = 'http://openlibrary.org/';
//const Url2 = 'http://openlibrary.org/search.json?';
//для поиска название книги
// простой запрос
//const = 'q=';
//название книги
//const = 'title=';
//по автору
//const = 'author=';
// доп параметр страница
//const = 'page=';
//const optionBooks = 'api/books/';
//для фильтра авторы
//const optionAuthor = 'authors/';
//let name = document.getElementById('default');

// тестовый вызов
/*
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("default").addEventListener('keydown', test);
});
//**
function test() {
    let testName = document.getElementById("default").value;
    let qUrl = "http://openlibrary.org/query.json";
    let viewTest = fetch(qUrl + '?type=/type/edition&authors=/authors/' + testName);

}
*/
// тестовая функция

async function fib(){
    // значение компонета
    let booksMass = [];
    const Url2 = 'http://openlibrary.org/search.json?';
    let name = document.getElementById('default').value;
    if (name == null || name === '') {
        return null;
    } else {
        //замена пробелов на +
        let newName = name.replace(' ','+');
        //результат новая ссылка
        let viewBook = fetch(`${Url2}q=`)
            .then (
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                return null;
            }
        );
        console.log(newName," новое значение");
        console.log(viewBook,"ссылка запроса");
        booksMass.push(viewBook);
    }
    console.log(name," значение компонента");
};

