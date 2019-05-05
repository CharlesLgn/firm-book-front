import ReactDOM from "react-dom";
import Home from "../main/home/Home";
import React from "react";
import Research from "../reasearch/Research";
import Person from "../all/person/Person";
import Post from "../all/post/Post";
import DetailPerson from "../detail/person/DetailPerson";
import DetailPost from "../detail/post/DetailPost";
import Login from "../login/Login";
import CreatePerson from "../create/person/CreatePerson";
import CreatePost from "../create/post/CreatePost";

export function goHome() {
    ReactDOM.render(<Home/>, document.getElementById('middle'));
}

export function goResearch() {
    ReactDOM.render(<Research/>, document.getElementById('middle'));
}

export function goPerson() {
    let handleClickId = id => {
        goDetailPerson(id);
    };
    ReactDOM.render(<Person handleClick={handleClickId}/>, document.getElementById('middle'));
}

export function goPost() {
    ReactDOM.render(<Post/>, document.getElementById('middle'));
}

export function goDetailPerson(id) {
    ReactDOM.render(<DetailPerson id={id}/>, document.getElementById('middle'));
}

export function goDetailPost(id) {
    ReactDOM.render(<DetailPost id={id}/>, document.getElementById('middle'));
}

export function createPerson() {
    ReactDOM.render(<CreatePerson />, document.getElementById('middle'));
}

export function createPost() {
    ReactDOM.render(<CreatePost />, document.getElementById('middle'));
}

export function disconnect() {
    localStorage.removeItem('user');
    localStorage.removeItem('psw');
    localStorage.removeItem('Authorization');
    ReactDOM.render(<Login />, document.getElementById('middle'));
}
