import React from 'react';
import Logo from '../img/1102.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>Made with React.js</span>
    </footer>
  );
};

export default Footer;
