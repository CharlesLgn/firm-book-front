import React from "react";
import ReactDOM from "react-dom";
import Menu from "../main/menu/Menu";
import Home from "../main/home/Home";
import Login from "../login/Login";
import Nothing from "../main/load/Nothing";

export function isLog() {
    let headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic " + window.btoa(localStorage.getItem('user') + ":" + localStorage.getItem('psw')),
    };
    localStorage.setItem('Authorization', headers["Authorization"]);
    fetch("http://localhost:8080/FirmBookBack/user/connect", {headers,})
        .then(result => {
            if (result.ok) {
                ReactDOM.render(<Menu/>, document.getElementById('left'));
                ReactDOM.render(<Home/>, document.getElementById('middle'));
            } else {
                ReactDOM.render(<Login/>, document.getElementById('middle'));
                ReactDOM.render(<Nothing/>, document.getElementById('loader'));
            }
        });
}
