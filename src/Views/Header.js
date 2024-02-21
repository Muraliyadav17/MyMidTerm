//functional component

import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Style/App.css';
import logo from '../Images/logo.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img className="my-logo" src={logo} alt="TastyTwist Logo" />
        <h1>TastyTwist</h1>
      </div>
      <nav className="nav">
      <Link to="/menu">Home</Link>
        <Link to="/more-items">Menu</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
