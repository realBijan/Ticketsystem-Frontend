// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './Header.css';
import Login from './Login';
import { UserContext } from '../UserContext';

function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">IU-Korrektur</h1>
        <nav className="nav">
          <ul className="navList">
            <li className="navItem">
              <Link to="/" className="navLink">Ticketliste</Link>
            </li>
            <li className="navItem">
              <Link to="/create" className="navLink">Ticket erstellen</Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="nav">
        <ul className="navList">
          {user ? (
            <>
              <li className="navItem">
                <span className="user-name">{user.name}</span>
              </li>
              <li className="navItem">
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </li>
            </>
          ) : (
            <li className="navItem">
              <Login onLogin={(user) => setUser(user)} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
