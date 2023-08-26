import React from 'react';
import './Navbar.css';
import Logo from '../img/1102.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="LOGO" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>美術</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>科學</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>文化</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>設計</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>美食</h6>
          </Link>
          <span>Eliot</span>
          <span>Logout</span>
          <span className="write">
            <Link className="wr" to="/write">
              寫文章
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
