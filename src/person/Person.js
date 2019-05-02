import React from 'react';
import './Person.css';
import {
    Button, Divider, Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from "@material-ui/core";
import {HomeIcon, MenuIcon, PersonIcon, PostIcon, ReseachIcon} from "../utils/Icon";
import ReactDOM from "react-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import {Go, goHome, goPerson, goPost, goResearch} from "../utils/Go";


class Person extends React.Component {

    render() {
        return (
            <div className="Home">
                <h1>See Person</h1>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={goResearch}>
                            <ReseachIcon />
                            <p> Research a Person</p>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={goPerson}>
                            <PersonIcon />
                            <p> See all People</p>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={goPost}>
                            <PostIcon />
                            <p> See all Post</p>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Person;
