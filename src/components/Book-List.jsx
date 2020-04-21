import React from "react";
import BookListItem from "./Book-List-Item";
import './Book-List.css';
const BookList = ({ dates }) => {

    const elements = dates.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <div className='carts-resoult'>
                    <a className='image-cart'>
                        картинка
                        <img className='img-search-resoult' src=''></img>
                    </a>
                    <div>
                        <p className='card-content-type'> тип подписи </p>
                        <p className='card-body'> название </p>
                        <p className='card-title'> подпись </p>
                        <BookListItem { ...itemProps }/>
                    </div>
                </div>
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

