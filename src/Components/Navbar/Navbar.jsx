import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from "../../LanguageContext";
import usaFlag from "../../assets/usa-flag.png";
import indonesiaFlag from "../../assets/indonesia-flag.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
      <nav className={`container ${location.pathname !== '/' ? 'dark-nav' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li><Link to="/">{language === "en" ? "Home" : "Beranda"}</Link></li>
          <li><Link to="/programs">{language === "en" ? "Programs" : "Program"}</Link></li>
          <li><Link to="/clients">{language === "en" ? "Clients" : "Klien"}</Link></li>
          <li><Link to="/teams">{language === "en" ? "Teams" : "Tim Kami"}</Link></li>
          <li><Link to="/contact">{language === "en" ? "Contact Us" : "Kontak Kami"}</Link></li>
        </ul>
        <div className="language-switcher">
        <div className={`language-option ${language === "en" ? "active" : ""}`} onClick={() => toggleLanguage("en")}>
          <img src={usaFlag} alt="English" className="flag" />
          <span>EN</span>
        </div>
        <div className={`language-option ${language === "id" ? "active" : ""}`} onClick={() => toggleLanguage("id")}>
          <img src={indonesiaFlag} alt="Indonesian" className="flag" />
          <span>ID</span>
        </div>
      </div>
        <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      </nav>
  );
};

export default Navbar;
