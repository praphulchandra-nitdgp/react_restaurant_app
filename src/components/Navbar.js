import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
        <div className="navbar-brand">
        <NavLink to="/">Fork Frenzy</NavLink>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuOpenIcon /> } 
        </button>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            <ul>
                <li><NavLink to="/" end onClick={toggleMenu} activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" onClick={toggleMenu} activeClassName="active">About</NavLink></li>
                <li><NavLink to="/menu" onClick={toggleMenu} activeClassName="active">Menu</NavLink></li>
                <li><NavLink to="/contact" onClick={toggleMenu} activeClassName="active">Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;
