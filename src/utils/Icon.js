import React from "react";
import {SvgIcon} from "@material-ui/core";


class ReseachIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </SvgIcon>
        );
    }
}

class HomeIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </SvgIcon>
        );
    }
}

class PersonIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </SvgIcon>
        );
    }
}

class PostIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
                <path fill="none" d="M0 0h24v24H0z"/>
            </SvgIcon>
        );
    }
}

class MenuIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white"/>
            </SvgIcon>
        );
    }
}

class PersonDataIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            </SvgIcon>
        );
    }
}

class DisconnectIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </SvgIcon>
        );
    }
}

class AddPersonIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/>
            </SvgIcon>
        );
    }
}

class AddPostIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z"/>
            </SvgIcon>
        );
    }
}

class EditIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M5 15v-3h3v-2H5V7H3v3H0v2h3v3zm7-1.25c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM7.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H7.34zM12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0-5c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7zm5 5c1.93 0 3.5-1.57 3.5-3.5S18.93 5 17 5c-.24 0-.48.02-.71.07.76.94 1.21 2.13 1.21 3.43 0 1.3-.47 2.48-1.23 3.42.24.05.48.08.73.08zm2.32 2.02c1 .81 1.68 1.87 1.68 3.23V19h3v-1.75c0-1.69-2.44-2.76-4.68-3.23z"/>
            </SvgIcon>
        );
    }
}

export {
    HomeIcon,
    PersonIcon,
    PostIcon,
    ReseachIcon,
    MenuIcon,
    PersonDataIcon,
    DisconnectIcon,
    EditIcon,
    AddPersonIcon,
    AddPostIcon
};