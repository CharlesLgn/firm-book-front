import React from 'react';
import './Post.css';
import {
    Button, Checkbox, Dialog,
    DialogTitle,
    Grid,
    InputBase,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, TextField
} from "@material-ui/core";
import {PostIcon} from "../../utils/Icon";
import {goDetailPost} from "../../utils/Go";
import ReactDOM from "react-dom";

function createPost(id, libelle, niveau, personFirstName, personnLastName) {
    return {id, libelle, niveau, personFirstName, personnLastName};
}

const rows = [];
let advanceRow = rows;
let printRow = advanceRow;

let advanceResearchData = {
    firstName: "",
    lastName: "",
    levelMin: -1,
    levelMax: 9999,
    jobName: "",
    personOnTheJob: true
};

class Post extends React.Component {

    state = {
        open: false,
        searchBar: "",
        firstTime: true
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
    refresh = () => {
        advanceRow = rows;
        this.filterList("");
    };

    filterList = (val) => {
        printRow = advanceRow.filter(item => {
            let data = item.libelle + item.niveau + item.personFirstName + item.personnLastName;
            return data.toLowerCase().search(
                val.toLowerCase().trim()) !== -1;
        });
        ReactDOM.render(<PostData/>, document.getElementById('Posts'));
    };

    getAll = () => {
        if (this.state.firstTime) {
            rows.length = 0;
            let headers = {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            };
            fetch("http://localhost:8080/FirmBookBack/post", {headers,})
                .then(result => result.json())
                .then(data => {
                    data.map(post => (
                        rows.push(createPost(post.id, post.libelle, post.niveau,
                            post.personne == null ? "" : post.personne.prenom,
                            post.personne == null ? "" : post.personne.nom))
                    ));
                    advanceRow = rows;
                    this.filterList("");
                });
            this.setState({firstTime: false});
        }
    };

    render() {
        this.getAll();

        return (
            <div className="Post">
                <h1>All Posts</h1>
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
                <Paper className="Post-Paper">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell/>
                                <TableCell>Libele</TableCell>
                                <TableCell>Level</TableCell>
                                <TableCell>Person on the post</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody id={"Posts"}>
                        </TableBody>
                    </Table>
                </Paper>
                <Dialog open={this.state.open} maxWidth={"sm"} onClose={() => this.handleClose()} aria-labelledby="simple-dialog-title">
                    <DialogTitle id="simple-dialog-title">Advance Research</DialogTitle>
                    <div className={"Dialog-Paper"}>
                        <Grid container spacing={6}>
                            <Grid xs={3}>
                                <TextField
                                    className={"Research-TextField"}
                                    label="Post Name"
                                    onChange={e => this.changeJobName(e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <table>
                                    <tr>
                                        <td>Level between</td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            type="number"
                                            onChange={e => this.changeMinLevel(e)}
                                            margin="normal"
                                        /></td>
                                        <td> and</td>
                                        <td><TextField
                                            className={"Research-TextField"}
                                            type="number"
                                            onChange={e => this.changeMaxLevel(e)}
                                            margin="normal"
                                        /></td>
                                    </tr>
                                </table>
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    className={"Research-TextField"}
                                    label="Person first name"
                                    onChange={e => this.changeFirstName(e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={3}>
                                <TextField
                                    className={"Research-TextField"}
                                    label="Person last name"
                                    onChange={e => this.changeLastName(e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={4}>
                                <p><Checkbox onChange={() => this.changerPersonOnThePost()}
                                             defaultChecked={advanceResearchData.personOnTheJob}/> Person on the post
                                </p>
                            </Grid>
                            <Grid xs={12}>
                                <Button variant="contained" color="primary" className={"Research-Button"}
                                        onClick={() => this.handleDialogClick()}>Research</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
            </div>
        );
    }

    changeJobName = (e) => {
        advanceResearchData.jobName = e.target.value
    };
    changeFirstName = (e) => {
        advanceResearchData.firstName = e.target.value;
    };
    changeLastName = (e) => {
        advanceResearchData.lastName = e.target.value
    };
    changeMinLevel = (e) => {
        advanceResearchData.levelMin = e.target.value;
    };
    changeMaxLevel = (e) => {
        advanceResearchData.levelMax = e.target.value;
    };
    changerPersonOnThePost = () => {
        advanceResearchData.personOnTheJob = !advanceResearchData.personOnTheJob;
    };

    handleDialogClick = () => {
        this.setState({
            open: false,
        });
        advanceRow = rows.filter(item => {
            let jobName = item.libelle.toLowerCase().search(advanceResearchData.jobName.toLowerCase().trim()) !== -1;
            let jobLevel = item.niveau >= advanceResearchData.levelMin && item.niveau <= advanceResearchData.levelMax;
            let lastName = true;
            let firstName = true;
            if (!advanceResearchData.personOnTheJob) {
                lastName = (item.personLastName == null || item.personLastName === "");
                firstName = (item.personFirstName == null || item.personFirstName === "");
            } else {
                lastName = item.personLastName != null && item.personLastName.toLowerCase().search(advanceResearchData.lastName.toLowerCase().trim()) !== -1;
                firstName =item.personFirstName != null && item.personFirstName.toLowerCase().search(advanceResearchData.firstName.toLowerCase().trim()) !== -1;
            }
            return lastName && firstName && jobLevel && jobName;
        });
        this.filterList("");
    }
}

class PostData extends React.Component {
    handleClick = id => {
        goDetailPost(id);
    };

    render() {
        return (
            printRow.map(row => (
                <TableRow key={row.id}>
                    <TableCell>
                        <Button onClick={() => this.handleClick(row.id)}>
                            <PostIcon/>
                        </Button>
                    </TableCell>
                    <TableCell>{row.libelle}</TableCell>
                    <TableCell>{row.niveau}</TableCell>
                    <TableCell>{row.personnLastName + " " + row.personFirstName}</TableCell>
                </TableRow>
            ), this)
        );
    }
}

export default Post;
