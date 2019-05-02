import ReactDOM from "react-dom";
import Home from "../home/Home";
import React from "react";
import Research from "../reasearch/Research";
import Person from "../person/Person";
import Post from "../post/Post";

export function goHome() {
    ReactDOM.render(<Home />, document.getElementById('middle'));
}

export function goResearch() {
    ReactDOM.render(<Research />, document.getElementById('middle'));
}

export function goPerson() {
    ReactDOM.render(<Person />, document.getElementById('middle'));
}

export function goPost() {
    ReactDOM.render(<Post />, document.getElementById('middle'));
}
