import React from 'react';
import './DetailPerson.css';
import {
    Avatar,
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Divider,
    MenuItem,
    Paper,
    TextField
} from "@material-ui/core";
import md5 from 'md5';
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import {PostIcon} from "../../utils/Icon";
import {goDetailPost, goPerson} from "../../utils/Go";
import ReactDOM from "react-dom";

let pers = {};

const getById = (id) => {
    let headers = {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('Authorization')
    };
    fetch("http://localhost:8080/FirmBookBack/person/" + id, {headers,})
        .then(result => result.json())
        .then(data => {
            pers = {
                id: data.id,
                firstName: data.prenom,
                lastName: data.nom,
                email: data.email,
                birthDate: data.dateDeNaissance,
                sexe: {
                    id: data.sexe.id,
                    libele: data.sexe.libele
                },
                poste: data.poste,
                emplacementBureau: data.emplacementBureau,
                dateArrive: data.dateArrive
            };
            ReactDOM.render(<PersonData/>, document.getElementById('personData'));
            return null;
        });

};

class DetailPerson extends React.Component {

    render() {
        getById(this.props.id);
        return (
            <div className="Detail-Person">
                <h1 align={"center"}>Person Detail</h1>
                <Paper className="Detail-Person-Paper" id={"personData"}/>
            </div>
        );
    }
}

class PersonData extends React.Component {
    state = {
        open: false,
        deleteOpen: false,
        personFirstName: pers.firstName,
        personLastName: pers.lastName,
        personEmail: pers.email,
        sexeId: pers.sexe.id,
        personBureau: pers.emplacementBureau,
    };

    handleClickOpen = () => {
        this.setState({open: true,});
    };
    handleClose = () => {
        this.setState({open: false});
    };
    handleDeleteOpen = () => {
        this.setState({deleteOpen: true,});
    };
    handleDeleteClose = () => {
        this.setState({deleteOpen: false,});
    };

    render() {
        return (
            <Grid container spacing={12}>
                <Grid className="Detail-Avatar-Grid" item xs={2}>
                    <Avatar className="Detail-Avatar" src={"https://www.gravatar.com/avatar/" + md5(pers.email)}
                            alt={"image"}/>
                </Grid>
                <Grid item xs={10} className="Detail-Person-Table">
                    <table>
                        <tbody>
                        <tr>
                            <td>First name:</td>
                            <td>{pers.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last name:</td>
                            <td>{pers.lastName}</td>
                        </tr>
                        <tr>
                            <td>Sexe:</td>
                            <td>{pers.sexe.libele}</td>
                        </tr>
                        <tr>
                            <td>Birth date:</td>
                            <td>{moment(new Date(pers.birthDate)).format('MM/DD/YYYY')}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Divider/>
                            </td>
                        </tr>
                        <tr>
                            <td>Room place:</td>
                            <td>{pers.emplacementBureau}</td>
                        </tr>
                        <tr>
                            <td>Arrival date:</td>
                            <td>{moment(new Date(pers.dateArrive)).format('MM/DD/YYYY')}</td>
                        </tr>
                        <tr>
                            <td>Post:</td>
                            <td>
                                <Button variant="contained" color={"primary"}
                                        disabled={pers.poste === null}
                                        onClick={e => goDetailPost(pers.poste.id)}>
                                    <PostIcon/>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><a href={"mailto:" + pers.email}>{pers.email}</a></td>
                        </tr>
                        </tbody>
                    </table>
                </Grid>
                <Grid item xs={3}>
                    <Button className="Detail-Person-Update" variant="contained" color="primary"
                            onClick={() => this.handleClickOpen()}>
                        Update
                    </Button>
                </Grid>
                <Grid xs={3}>
                    <Button variant="contained" color="secondary" className={"Research-Button"}
                            onClick={() => this.handleDeleteOpen()}>Delete</Button>
                </Grid>
                <Dialog open={this.state.open} onClose={() => this.handleClose()} aria-labelledby="simple-dialog-title">
                    <DialogTitle id="simple-dialog-title">Update Post</DialogTitle>
                    <div className={"Dialog-Paper"}>
                        <Grid container spacing={4}>
                            <Grid xs={4}>
                                <TextField
                                    className={"Research-TextField"}
                                    id="standard-first-name"
                                    label="First Name"
                                    onChange={e => this.changeFisrtName(e)}
                                    value={this.state.personFirstName}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <TextField
                                    className={"Research-TextField"}
                                    id="standard-last-name"
                                    label="Last Name"
                                    onChange={e => this.changeLastName(e)}
                                    value={this.state.personLastName}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <TextField select
                                           className={"Research-TextField"}
                                           id="standard-last-name"
                                           label="Sex"
                                           onChange={e => this.changeSexId(e)}
                                           value={this.state.sexeId}
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
                                    onChange={e => this.changeWorkRoom(e)}
                                    value={this.state.personBureau}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <TextField
                                    className={"Research-TextField"}
                                    id="standard-post-name"
                                    label="email"
                                    onChange={e => this.changeEmail(e)}
                                    value={this.state.personEmail}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={6}>
                                <Button variant="contained" color="primary" className={"Research-Button"}
                                        onClick={() => this.handleDialogClick()}>Update</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
                <Dialog open={this.state.deleteOpen} keepMounted onClose={() => this.handleDeleteClose()}>
                    <Paper className={"Dialog-Paper"}>
                        <DialogTitle id="alert-dialog-slide-title">
                            {"Delete this person ?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Delete this person is definitive and for ever.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.handleCloseDeleteAction(false)} color="primary">
                                No
                            </Button>
                            <Button onClick={() => this.handleCloseDeleteAction(true)} color="primary">
                                yes
                            </Button>
                        </DialogActions>
                    </Paper>
                </Dialog>
            </Grid>
        );
    }

    handleCloseDeleteAction = (choice) => {
        this.setState({
            deleteOpen: false
        });
        if (choice) {
            fetch("http://localhost:8080/FirmBookBack/person/" + pers.id, {
                method: 'delete',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('Authorization')
                }
            }).then(() => {
                goPerson();
                return true;
            });
        }
    };

    handleDialogClick = () => {
        this.setState({
            open: false,
        });
        let data = {
            nom: this.state.personLastName,
            prenom: this.state.personFirstName,
            sexeId: this.state.sexeId,
            emplacementBureau: this.state.personBureau,
            email: this.state.personEmail
        };
        fetch("http://localhost:8080/FirmBookBack/person/" + pers.id, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            }
        }).then(() => {
            getById(pers.id);
            return true;
        });
    };

    changeEmail = (e) => {
        this.setState({

            personEmail: e.target.value
        });
    };
    changeFisrtName = (e) => {
        this.setState({
            postLvl: e.target.value
        });
    };
    changeLastName = (e) => {
        this.setState({
            postLib: e.target.value
        });
    };
    changeWorkRoom = (e) => {
        this.setState({
            personBureau: e.target.value
        });
    };
    changeSexId = (e) => {
        this.setState({
            sexeId: e.target.value
        });
    };

}

export default DetailPerson;
