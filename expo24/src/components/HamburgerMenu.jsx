import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/Activities">Activiteiten</Link>
        <Link to="/Timetable">Timetable</Link>
        <Link to="/Accessibility">Bereikbaarheid</Link>
        <Link to="/Practical">Praktische info</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default HamburgerMenu;
