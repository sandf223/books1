import React from "react";
import "./book-list-item.css"

const BookListItem = ({label, important = false }) => {

    const style = {
      color: important ? 'tomato' : 'black'
    };

    return (
        <span className="book-list-item"
                     style={style}>
            { label }
        </span>);
};

export default BookListItem;
