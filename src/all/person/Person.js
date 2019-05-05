import React from 'react';
import './Person.css';
import {
    Button,
    Dialog,
    DialogTitle,
    Grid,
    InputBase,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import {PersonDataIcon} from "../../utils/Icon";
import {goDetailPerson} from "../../utils/Go";
import ReactDOM from "react-dom";

function createPerson(id, firstName, lastName, email, room, birthDate, arriveDate) {
    return {id, firstName, lastName, email, room, birthDate, arriveDate};
}

const rows = [];

let advanceRow = rows;
let printRow = advanceRow;

let advanceResearchData = {
    firstName: "",
    lastName: "",
    bureau: "",
    email: "",
    birthDateF:new Date("1900-01-01T00:00:00").getTime(),
    birthDateT:Date.now(),
    arriveDateF:new Date("1900-01-01T00:00:00").getTime(),
    arriveDateT:Date.now()
};

class Person extends React.Component {
    state = {
        open: false,
        searchBar:"",
        firstTime:true
    };

    handleClickOpen = () => {
        printRow = [];
        this.setState({
            open: true,
        });
    };
    handleClose = () => {
        this.setState(
            {open: false}
        );
    };

    filterList = (val) => {
        printRow = advanceRow.filter(item => {
            let data = item.firstName + item.lastName + item.email;
            return data.toLowerCase().search(
                val.toLowerCase().trim()) !== -1;
        });
        ReactDOM.render(<PeopleData handleClick={this.props.handleClick}/>, document.getElementById('People'));
    };

    refresh = ()  => {
        advanceRow = rows;
        this.filterList("");
    };

    getAll = () => {
        if (this.state.firstTime) {
            rows.length = 0;
            let headers = {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            };
            fetch("http://localhost:8080/FirmBookBack/people", {headers,})
                .then(result => result.json())
                .then(data => {
                    data.map(post => (
                        rows.push(createPerson(post.id, post.prenom, post.nom, post.email, post.emplacementBureau, post.dateDeNaissance, post.dateArrive))
                    ));
                    advanceRow = rows;
                    this.filterList("");
                })
            this.setState({firstTime:false});
        }
    };

    render() {
        this.getAll();
        return (
            <div className="Person">
                <h1>All People</h1>
                <Grid container spacing={12}>
                    <Grid item xs={4}>
                        <Paper className={"Search-Bar"} elevation={1}>
                            <InputBase placeholder="Search" onChange={e => this.filterList(e.target.value)}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => this.handleClickOpen()}>Advance Research</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => this.refresh()}>clean Research</Button>
                    </Grid>
                </Grid>
                <Paper className="Person-Paper">
                    <Table>
                        <TableHead className="Person-Table-Head">
                            <TableRow>
                                <TableCell/>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody id={"People"}>
                        </TableBody>
                    </Table>
                </Paper>
                <Dialog open={this.state.open} maxWidth={"md"} onClose={() => this.handleClose()} aria-labelledby="simple-dialog-title">
                    <DialogTitle id="simple-dialog-title">Advance Research</DialogTitle>
                    <div className={"Dialog-Paper"}>
                        <Grid container spacing={4}>
                            <Grid xs={3}>
                                <TextField
                                    className={"Research-TextField"}
                                    id="standard-first-name"
                                    label="First Name"
                                    onChange={e => this.changeFisrtName(e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={3}>
                                <TextField
                                    className={"Research-TextField"}
                                    id="standard-last-name"
                                    label="Last Name"
                                    onChange={e => this.changeLastName(e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={3}>
                                <TextField
                                    className={"Research-TextField"}
                                    id="standard-post-name"
                                    label="email"
                                    onChange={e => this.changeEmail(e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={3}>
                                <TextField
                                    className={"Research-TextField"}
                                    id="standard-work-room"
                                    label="Work Room"
                                    onChange={e => this.changeWorkRoom(e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={8}>
                                <table>
                                    <tr>
                                        <td>Birth Date: </td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            id="standard-post-name"
                                            type="date"
                                            defaultValue={advanceResearchData.birthDateF}
                                            onChange={e => this.changeBirthDateF(e)}
                                            margin="normal"
                                        /></td>
                                        <td> - </td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            id="standard-post-name"
                                            type="date"
                                            defaultValue={advanceResearchData.birthDateT}
                                            onChange={e => this.changeBirthDateT(e)}
                                            margin="normal"
                                        /></td>
                                    </tr>
                                </table>
                            </Grid>
                            <Grid xs={8}>
                                <table>
                                    <tr>
                                        <td>Arrive Date: </td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            id="standard-post-name"
                                            type="date"
                                            defaultValue={advanceResearchData.arriveDateF}
                                            onChange={e => this.changeArriveDateF(e)}
                                            margin="normal"
                                        /></td>
                                        <td> - </td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            id="standard-post-name"
                                            type="date"
                                            defaultValue={advanceResearchData.arriveDateT}
                                            onChange={e => this.changeArriveDateT(e)}
                                            margin="normal"
                                        /></td>
                                    </tr>
                                </table>
                            </Grid>
                            <Grid xs={6}>
                                <Button variant="contained" color="primary" className={"Research-Button"}
                                        onClick={() => this.handleDialogClick()}>Research</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
            </div>
        );
    }

    changeEmail = (e) => {
        advanceResearchData.email = e.target.value
    };
    changeFisrtName = (e) => {
        advanceResearchData.firstName = e.target.value;
    };
    changeLastName = (e) => {
        advanceResearchData.lastName = e.target.value
    };
    changeWorkRoom = (e) => {
        advanceResearchData.bureau = e.target.value;
    };
    changeBirthDateF = (e) => {
        advanceResearchData.birthDateF = new Date(e.target.value).getTime();
    };
    changeBirthDateT = (e) => {
        advanceResearchData.birthDateT = new Date(e.target.value).getTime();
    };
    changeArriveDateF = (e) => {
        advanceResearchData.arriveDateF = new Date(e.target.value).getTime();
    };
    changeArriveDateT = (e) => {
        advanceResearchData.arriveDateT = new Date(e.target.value).getTime();
    };

    handleDialogClick = () => {
        this.setState({
            open: false,
        });
        advanceRow = rows.filter(item => {
            let lastName = item.lastName.toLowerCase().search(advanceResearchData.lastName.toLowerCase().trim()) !== -1;
            let firstName = item.firstName.toLowerCase().search(advanceResearchData.firstName.toLowerCase().trim()) !== -1;
            let email = item.email.toLowerCase().search(advanceResearchData.email.toLowerCase().trim()) !== -1;
            let room = advanceResearchData.bureau === "" || (item.room !== null && item.room.toLowerCase().search(advanceResearchData.bureau.toLowerCase().trim()) !== -1);
            let birthDate = advanceResearchData.birthDateF <= item.birthDate && advanceResearchData.birthDateT >= item.birthDate;
            let arriveDate = advanceResearchData.arriveDateF <= item.arriveDate && advanceResearchData.arriveDateT >= item.arriveDate;

            return lastName && firstName && email && room && birthDate && arriveDate;
        });
        this.filterList("");
    };
}

class PeopleData extends React.Component {

    render() {
        return (
            printRow.map(row => (
                <TableRow key={row.id}>
                    <TableCell>
                        <Button onClick={() => this.props.handleClick(row.id)}>
                            <PersonDataIcon/>
                        </Button>
                    </TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>
                        <a href={"mailto:" + row.email}>{row.email}</a>
                    </TableCell>
                </TableRow>
            ), this)
        );
    }
}

export default Person;
