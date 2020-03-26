import React from "react";
import BookListItem from "./Book-List-Item";
import './Book-List.css';
const BookList = ({ dates }) => {

    const elements = dates.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <BookListItem { ...itemProps }/>
            </li>
        );
    });

    return (
        <ul className="list-group book-list">
            { elements }
        </ul>
    );
};

export default BookList;

