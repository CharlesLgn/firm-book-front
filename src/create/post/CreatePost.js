import React from 'react';
import './CreatePerson.css';
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import ReactDOM from "react-dom";
import DetailPost from "../../detail/post/DetailPost";


class CreatePost extends React.Component {

    state = {
        enableButton:false,
        postLvl: 1,
        postLib: ""
    };

    render() {
        return (
            <div className="Create">
                <h1>New person</h1>
                <Paper className={"Create-Paper"}>
                    <Grid container spacing={3}>
                        <Grid xs={4}>
                            <TextField
                                className={"Create-TextField"}
                                id="standard-first-name"
                                label="Libelle"
                                onChange={ e => this.changeLibelle(e) }
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Create-TextField"}
                                id="standard-last-name"
                                label="Level"
                                defaultValue={1}
                                onChange={ e => this.changeLevel(e) }
                                type="number"
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Button variant="contained" color="primary" className={"Create-Button"}
                                    onClick={() => this.createClick()}
                                    disabled={!this.state.enableButton}>
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }

    enableButton = () => {
        let test = this.state.postLib.trim() !== ""
            && this.state.postLvl > 0;
        this.setState({
            enableButton:test
        });

    };

    changeLibelle = (e) => {
        this.setState({
            postLib: e.target.value
        }, () => {
            this.enableButton();
        });
        return this.enableButton();
    };
    changeLevel = (e) => {
        this.setState({
            postLvl: e.target.value
        }, () => {
            this.enableButton();
        });
    };

    createClick = () => {
        let post = {
            libelle:this.state.postLib,
            niveau:this.state.postLvl
        };
        fetch("http://localhost:8080/FirmBookBack/post", {
            method: 'post',
            body: JSON.stringify(post),
            headers:{
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            }
        })
            .then(result => result.json())
            .then(response => {
                ReactDOM.render(<DetailPost id={response.id}/>, document.getElementById('middle'));
                return true;
            });
    }
}

export default CreatePost;
