import React from 'react';
import title from '../../titre.png';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="menu-name">
                    <img src={title} alt="" height="40px"/>
                    <div id="loader" />
                </div>
            </div>
        );
    }
}

export default Header;
