import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${location.pathname !== '/' ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/contact" className="btn">Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
