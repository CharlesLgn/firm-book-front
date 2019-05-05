import React from 'react';
import title from '../../titre.png';
import './Header.css';
import Loader from "../load/Loader";
import ReactDOM from "react-dom";
import Boot from "../boot/Boot";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="menu-name">
                    <div id="loader">
                        <Loader />
                    </div>
                    <img className={"Header-Title"} src={title} alt="" height="40px" onClick={() => this.goMenu()}/>
                </div>
            </div>
        );
    }

    goMenu = () => {
        ReactDOM.render(<Boot />, document.getElementById('middle'));
    }
}

export default Header;
