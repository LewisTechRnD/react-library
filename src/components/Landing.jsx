import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
       <section id="landing">
        <header>
            <div className="header__container">
                <h1>Welcome to Our Library</h1>
                <h2>Browse your next Book Binge with <span className="orange">Da Library</span></h2>
                <Link to="Features">
                    <button className="btn">Browse Books</button>
                </Link>
            </div>
            <figure className="header__img--wrapper">
                <img src={UndrawBooks} alt="Books Illustration" />
            </figure>
        </header>
       </section>
    );
}

export default Landing;