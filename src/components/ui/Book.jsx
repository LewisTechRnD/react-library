import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons/faStarHalfAlt";
import { Link } from "react-router-dom"
import Rating from "../ui/Rating"
import Price from "../ui/Price"

const Book = ({ book }) => {

    return (
        <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={book.url} alt="" className="book__img" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__link">
                    {book.title}
                </Link>
                <Rating rating={book.rating} />
                <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
            </div>
        </div>
    )
}

export default Book;