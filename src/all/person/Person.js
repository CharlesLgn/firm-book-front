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
    TableCell, TableFooter,
    TableHead, TablePagination,
    TableRow,
    TextField
} from "@material-ui/core";
import {ArrowDownIcon, ArrowUpIcon, NoIcon, PersonDataIcon} from "../../utils/Icon";
import ReactDOM from "react-dom";

function createPerson(id, firstName, lastName, email, room, birthDate, arriveDate) {
    return {id, firstName, lastName, email, room, birthDate, arriveDate};
}

const rows = [];
let advanceRow = rows;
let printRow = advanceRow;
const nbRows = {nb:0};

let advanceResearchData = {
    firstName: "",
    lastName: "",
    bureau: "",
    email: "",
    birthDateF: new Date("1900-01-01T00:00:00").getTime(),
    birthDateT: Date.now(),
    arriveDateF: new Date("1900-01-01T00:00:00").getTime(),
    arriveDateT: Date.now()
};

class Person extends React.Component {
    state = {
        open: false,
        searchBar: "",
        firstTime: true,

        SortFirstName: 1,
        SortLastName: 1,
        SortEmail: 1,
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

    sort = (value, sort) => {
        printRow.sort((item1, item2) => {
            if (item1[value] < item2[value]) {
                return sort;
            } else {
                return -sort;
            }
        });
        ReactDOM.render(<PeopleData handleClick={this.props.handleClick}/>, document.getElementById('People'));
    };

    sortFirstName = () => {
        this.setState({
            SortFirstName: -this.state.SortFirstName,
            SortLastName: 1,
            SortEmail: 1,
        }, () => {
            this.sort('firstName', this.state.SortFirstName);
            if (this.state.SortFirstName === -1) {
                ReactDOM.render(<ArrowDownIcon/>, document.getElementById('FirstName-Arrow'));
            } else {
                ReactDOM.render(<ArrowUpIcon/>, document.getElementById('FirstName-Arrow'));
            }
            ReactDOM.render(<NoIcon/>, document.getElementById('LastName-Arrow'));
            ReactDOM.render(<NoIcon/>, document.getElementById('Email-Arrow'));
        });
    };
    sortLastName = () => {
        this.setState({
            SortFirstName: 1,
            SortLastName: -this.state.SortLastName,
            SortEmail: 1,
        }, () => {
            this.sort('lastName', this.state.SortLastName);
            if (this.state.SortLastName === -1) {
                ReactDOM.render(<ArrowDownIcon/>, document.getElementById('LastName-Arrow'));
            } else {
                ReactDOM.render(<ArrowUpIcon/>, document.getElementById('LastName-Arrow'));
            }
            ReactDOM.render(<NoIcon/>, document.getElementById('FirstName-Arrow'));
            ReactDOM.render(<NoIcon/>, document.getElementById('Email-Arrow'));
        });
    };
    sortEmail = () => {
        this.setState({
            SortFirstName: 1,
            SortLastName: 1,
            SortEmail: -this.state.SortEmail,
        }, () => {
            this.sort('email', this.state.SortEmail);
            if (this.state.SortEmail === -1) {
                ReactDOM.render(<ArrowDownIcon/>, document.getElementById('Email-Arrow'));
            } else {
                ReactDOM.render(<ArrowUpIcon/>, document.getElementById('Email-Arrow'));
            }
            ReactDOM.render(<NoIcon/>, document.getElementById('FirstName-Arrow'));
            ReactDOM.render(<NoIcon/>, document.getElementById('LastName-Arrow'));
        });
    };

    filterList = (val) => {
        printRow = advanceRow.filter(item => {
            let data = item.firstName + item.lastName + item.email;
            return data.toLowerCase().search(
                val.toLowerCase().trim()) !== -1;
        });
        ReactDOM.render(<PeopleData handleClick={this.props.handleClick}/>, document.getElementById('People'));

    };

    refresh = () => {
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
                    this.sortFirstName();
                });
            this.setState({firstTime: false});
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
                                <TableCell>
                                    <Grid container>
                                        <div id={"FirstName-Arrow"}/>
                                        <Button onClick={() => this.sortFirstName()}>First Name</Button>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Grid container>
                                        <div id={"LastName-Arrow"}/>
                                        <Button onClick={() => this.sortLastName()}>Last Name</Button>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Grid container>
                                        <div id={"Email-Arrow"}/>
                                        <Button onClick={() => this.sortEmail()}>E-mail</Button>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody id={"People"}>
                        </TableBody>
                    </Table>
                </Paper>
                <Dialog open={this.state.open} maxWidth={"md"} onClose={() => this.handleClose()}
                        aria-labelledby="simple-dialog-title">
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
                                        <td>Birth Date:</td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            id="standard-post-name"
                                            type="date"
                                            defaultValue={advanceResearchData.birthDateF}
                                            onChange={e => this.changeBirthDateF(e)}
                                            margin="normal"
                                        /></td>
                                        <td> -</td>
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
                                        <td>Arrive Date:</td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            id="standard-post-name"
                                            type="date"
                                            defaultValue={advanceResearchData.arriveDateF}
                                            onChange={e => this.changeArriveDateF(e)}
                                            margin="normal"
                                        /></td>
                                        <td> -</td>
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
