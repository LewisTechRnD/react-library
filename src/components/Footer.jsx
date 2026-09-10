import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row rowcolumn">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} className="footer__logo--img" alt="logo" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/" className="footer__link no-cursor">
              About
            </Link>
            <Link to="/" className="footer__link">
              Books
            </Link>
            <Link to="/" className="footer__link">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Library. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
