import React from "react";
import {SvgIcon} from "@material-ui/core";
import Menu from "../menu/Menu";


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
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </SvgIcon>
        );
    }
}

class PostIcon extends React.Component {
    render() {
        return (
            <SvgIcon>
                <path
                    d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
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


export {
    HomeIcon,
    PersonIcon,
    PostIcon,
    ReseachIcon,
    MenuIcon
};