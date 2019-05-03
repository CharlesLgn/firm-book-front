import React from "react";
import ReactDOM from "react-dom";

export function isLog() {
    let headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic " + window.btoa(localStorage.getItem('user') + ":" + localStorage.getItem('psw')),
    };
    fetch("http://localhost:8080/FirmBookBack/user/connect", {headers,})
        .then(response => {
            if (response.ok) {
                ReactDOM.render(<Menu/>, document.getElementById('left'));
                return false;
            } else {
                ReactDOM.render(<Menu/>, document.getElementById('left'));
                return true;
            }
        });
}

import Menu from "../main/menu/Menu";
