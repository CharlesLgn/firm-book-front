import React from 'react';
import './DetailPost.css';
import {
    Button,
    Dialog,
    DialogTitle,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    TextField
} from "@material-ui/core";
import {EditIcon, PersonDataIcon} from "../../utils/Icon";
import {goDetailPerson} from "../../utils/Go";
import ReactDOM from "react-dom";
import Person from "../../all/person/Person";

let post = {};

let getById = (id) => {
    let headers = {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('Authorization')
    };
    fetch("http://localhost:8080/FirmBookBack/post/" + id, {headers,})
        .then(result => result.json())
        .then(data => {
            post = {
                id: data.id,
                libelle: data.libelle,
                niveau: data.niveau,
                personne: data.personne,
                responssable: data.responssable
            };
            ReactDOM.render(<PostData/>, document.getElementById('Post-Data'));
            return null;
        });

};

class DetailPost extends React.Component {

    render() {
        getById(this.props.id);
        return (
            <div className="Detail-Post">
                <h1>Post Detail</h1>
                <div id={"Post-Data"}/>
            </div>
        );
    }
}

class PostData extends React.Component {
    state = {
        open: false,
        bossPicker: false,
        personPicker: false,
        persLib: post.libelle,
        postLvl: post.niveau
    };

    handleClickOpen         = () => {this.setState({open: true,});};
    handleClose             = () => {this.setState({open: false});};
    handleOpenBossPicker    = () => {this.setState({bossPicker:true});};
    handleCloseBossPicker   = () => {this.setState({bossPicker: false});};
    handleOpenPersonPicker  = () => {this.setState({personPicker:true});};
    handleClosePersonPicker = () => {this.setState({personPicker: false});};

    render() {
        return (
            <div>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="Post name:"/>
                        <ListItemText primary={post.libelle}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Post level:"/>
                        <ListItemText primary={post.niveau}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItem button onClick={() => goDetailPerson(post.personne != null ? post.personne.id : 0)}
                                  disabled={post.personne == null}>
                            <ListItemIcon>
                                <PersonDataIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Person:"/>
                            <ListItemText primary={post.personne != null ? post.personne.nom : ""}/>
                        </ListItem>
                        <ListItemIcon>
                            <Button onClick={() => this.handleOpenPersonPicker()}>
                                <EditIcon/>
                            </Button>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItem button
                                  onClick={() => goDetailPerson(post.responssable != null ? post.responssable.id : 0)}
                                  disabled={post.responssable == null}>
                            <ListItemIcon>
                                <PersonDataIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Boss:  "/>
                            <ListItemText primary={post.responssable != null ? post.responssable.nom : ""}/>
                        </ListItem>
                        <ListItemIcon>
                            <Button onClick={() => this.handleOpenBossPicker()}>
                                <EditIcon/>
                            </Button>
                        </ListItemIcon>
                    </ListItem>
                </List>
                <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen()}>Update</Button>
                <Dialog open={this.state.open} onClose={() => this.handleClose()} aria-labelledby="simple-dialog-title">
                    <DialogTitle id="simple-dialog-title">Update Post</DialogTitle>
                    <div>
                        <Grid container spacing={4}>
                            <Grid xs={6}>
                                <TextField
                                    id="standard-post-name"
                                    defaultValue={this.state.postLib}
                                    onChange={e => this.changeLib(e)}
                                    label="Post Name"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    id="standard-post-level"
                                    defaultValue={this.state.postLvl}
                                    onChange={e => this.changeLvl(e)}
                                    type="number"
                                    label="Post Level"
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
                <Dialog fullWidth={true} maxWidth={"lg"} open={this.state.bossPicker} onClose={() => this.handleCloseBossPicker()} className={"Dialog-Boss"}>
                    <Paper className={"Dialog-Paper"}>
                        <Person handleClick={this.closeBossPicker}/>
                    </Paper>
                </Dialog>
                <Dialog fullWidth={true} maxWidth={"lg"} open={this.state.personPicker} onClose={() => this.handleClosePersonPicker()} aria-labelledby="simple-dialog-title">
                    <Paper className={"Dialog-Paper"}>
                        <Person  handleClick={this.closePersonPicker}/>
                    </Paper>
                </Dialog>
            </div>
        );
    }

    changeLib = (e) => {this.setState({postLib: e.target.value});};
    changeLvl = (e) => {this.setState({postLvl: e.target.value});};

    closeBossPicker = (idPerson) => {
        this.setState({bossPicker:false});
        fetch("http://localhost:8080/FirmBookBack/post/boss", {
            method: 'post',
            body: JSON.stringify({
                personId:idPerson,
                postId:post.id
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            }
        }).then( () => {getById(post.id)});
    };
    closePersonPicker = (idPerson) => {
        this.setState({personPicker:false});
        fetch("http://localhost:8080/FirmBookBack/post/person", {
            method: 'post',
            body: JSON.stringify({
                personId:idPerson,
                postId:post.id
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            }
        }).then( () => {getById(post.id)});
    };
    handleDialogClick = () => {
        this.setState({
            open: false,
        });
        post = {
            id: post.id,
            libelle: this.state.postLib,
            niveau: this.state.postLvl,
            personne: post.personne,
            responssable: post.responssable
        };
        fetch("http://localhost:8080/FirmBookBack/post/" + post.id, {
            method: 'post',
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Authorization')
            }
        })
    }
}

export default DetailPost;
