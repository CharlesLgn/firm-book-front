import React from 'react';
import title from '../titre.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="menu-name">
        <img src={title} alt="" height="40px"/>
      </div>
    </div>
  );
}

export default Header;
