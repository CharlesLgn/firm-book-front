import React from 'react';
import './Research.css';
import {Button, Grid, MenuItem, Paper, TextField} from "@material-ui/core";


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
                                <MenuItem value={1}>Man</MenuItem>
                                <MenuItem value={2}>Woman</MenuItem>
                                <MenuItem value={3}>Other</MenuItem>
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
