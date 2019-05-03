import React from "react";
import Login from "../../login/Login";
import {isLog} from "../../utils/Log";
import Home from "../home/Home";

class Boot extends React.Component {
    render() {
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('psw'));
        console.log(isLog());
        if (isLog()) {
            return <Home/>;
        } else {
            return <Login/>
        }
    }
}

export default Boot;