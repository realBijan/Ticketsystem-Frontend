// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './Header.css'; // Importieren Sie die Header-spezifische CSS-Datei

function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">IU-Korrektur</h1>
      </div>
      <nav>
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navLink">Ticketliste</Link>
          </li>
          <li className="navItem">
            <Link to="/create" className="navLink">Ticket erstellen</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
