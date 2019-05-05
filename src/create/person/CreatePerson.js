import React from 'react';
import './CreatePerson.css';
import {Button, Grid, MenuItem, Paper, TextField} from "@material-ui/core";
import ReactDOM from "react-dom";
import DetailPerson from "../../detail/person/DetailPerson";


class CreatePerson extends React.Component {

    dataCreation = {
        personFirstName: "",
        personLastName: "",
        personEmail: "",
        birthDate:"1900-01-01",
        sexeId : 1,
        personBureau: "",
        emailPater:true,
    };

    state = {
        enableButton:false,
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
                                label="First Name"
                                onChange={ e => this.changeFisrtName(e) }
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Create-TextField"}
                                id="standard-last-name"
                                label="Last Name"
                                onChange={ e => this.changeLastName(e) }
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField select
                                       className={"Create-TextField"}
                                       id="standard-last-name"
                                       label="Sex"
                                       margin="normal"
                                       onChange={ e => this.changeSexId(e) }
                                       required
                            >
                                <MenuItem value={1}>Man</MenuItem>
                                <MenuItem value={2}>Woman</MenuItem>
                                <MenuItem value={3}>Other</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Create-TextField"}
                                id="standard-post-name"
                                label="Birth Date"
                                type="date"
                                onChange={ e => this.changeBirthDate(e) }
                                defaultValue="1900-01-01"
                                required
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Create-TextField"}
                                id="standard-post-level"
                                label="email"
                                error={this.dataCreation.emailPater}
                                onChange={ e => this.changeEmail(e) }
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid xs={4}>
                            <TextField
                                className={"Create-TextField"}
                                id="standard-work-room"
                                label="Work Room"
                                onChange={ e => this.changeWorkRoom(e) }
                                margin="normal"
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
        let test =
            !this.dataCreation.emailPater
            && this.dataCreation.personLastName !== ""
            && this.dataCreation.personFirstName !== "";

        this.setState({
                enableButton: test
        });
    };

    isMailValid = (mail) => {
        return mail.match("[A-z0-9][A-z0-9._%+-]*@[A-z0-9][A-z0-9.-]*\\.[A-z0-9]{2,5}");
    };

    changeEmail = (e) => {
        this.dataCreation.emailPater = !this.isMailValid(e.target.value);
        this.dataCreation.personEmail = e.target.value;
        this.enableButton();
    };
    changeFisrtName = (e) => {
        this.dataCreation.personFirstName = e.target.value;
        this.enableButton();
    };
    changeLastName = (e) => {
        this.dataCreation.personLastName = e.target.value;
        this.enableButton();
    };
    changeWorkRoom = (e) => {
        this.dataCreation.personBureau = e.target.value;
        this.enableButton();
    };
    changeSexId = (e) => {
        this.dataCreation.sexeId = e.target.value;
    };
    changeBirthDate = (e) => {
        this.dataCreation.birthDate = e.target.value;
        this.enableButton();
    };

    createClick = () => {
        let pers = {
            nom:this.dataCreation.personLastName,
            prenom:this.dataCreation.personFirstName,
            dateDeNaissance:this.dataCreation.birthDate,
            sexe:{
                id:this.dataCreation.sexeId,
            },
            emplacementBureau:this.dataCreation.personBureau,
            email:this.dataCreation.personEmail
        };
        fetch("http://localhost:8080/FirmBookBack/person", {
            method: 'post',
            body: JSON.stringify(pers),
            headers:{
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            }
        })
            .then(result => result.json())
            .then(response => {
                ReactDOM.render(<DetailPerson id={response.id}/>, document.getElementById('middle'));
                return true;
            });
    }
}

export default CreatePerson;
