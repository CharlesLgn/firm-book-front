import React from 'react';
import './Research.css';
import {
    Button, Divider, FormControl, Grid,
    IconButton, InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, MenuItem, Paper, Select,
    SwipeableDrawer, TextField
} from "@material-ui/core";
import {HomeIcon, MenuIcon, PersonIcon, PostIcon, ReseachIcon} from "../utils/Icon";
import ReactDOM from "react-dom";
import Home from "../main/home/Home";
import Login from "../login/Login";
import {Go, goHome, goPerson, goPost, goResearch} from "../utils/Go";


class Research extends React.Component {
    render() {
        return (
            <div className="Research">
                <h1>Research a person</h1>
                <Paper className={"Research-Paper"}>
                    <Grid container spacing={3}>
                        <Grid xs={4}>
                            <TextField
                                className={"Research-TextField"}
                                id="standard-first-name"
                                label="First Name"
                                margin="normal"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Research-TextField"}
                                id="standard-last-name"
                                label="Last Name"
                                margin="normal"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField select
                                       className={"Research-TextField"}
                                       id="standard-last-name"
                                       label="Sex"
                                       margin="normal"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Man</MenuItem>
                                <MenuItem value={20}>Woman</MenuItem>
                                <MenuItem value={30}>Other</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Research-TextField"}
                                id="standard-work-room"
                                label="Work Room"
                                margin="normal"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Research-TextField"}
                                id="standard-post-name"
                                label="Post Name"
                                margin="normal"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Research-TextField"}
                                id="standard-post-level"
                                type="number"
                                label="Post Level"
                                margin="normal"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Button variant="contained" color="primary" className={"Research-Button"}>Research</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default Research;
