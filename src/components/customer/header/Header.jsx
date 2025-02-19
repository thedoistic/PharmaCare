import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {

    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>PharmaCare</h1>
        </div>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className="header__nav-item">
              <a href="/customer/About" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="header__nav-item">
              <a href="/customer/Brands" onClick={() => setMenuOpen(false)}>Brands</a>
            </li>
            <li className="header__nav-item">
              <a href="/customer/News" onClick={() => setMenuOpen(false)}>News</a>
            </li>
            <li className="header__nav-item">
              <a href="/customer/OperationsAndPolicies" onClick={() => setMenuOpen(false)}>Operations and Policies</a>
            </li>
            <li className="header__nav-item">
              <a href="/customer/ContactUs" onClick={() => setMenuOpen(false)}>Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="header__buttons">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <button className="header__menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
