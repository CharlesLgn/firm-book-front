import React from 'react';
import './DetailPerson.css';
import {Avatar, Button, Divider, Paper} from "@material-ui/core";
import md5 from 'md5';
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import {PostIcon} from "../../utils/Icon";
import {goDetailPost} from "../../utils/Go";

const pers = {
    firstName: 'Charles',
    lastName: 'Ligony',
    email: 'bvxyz@hotmail.fr',
    birthDate: 863740800,
    sexe:{
        id:1,
        libele:"homme"
    },
    poste:{
        id:1
    },
    emplacementBureau:"",
    dateArrive:1528101680
};

class DetailPerson extends React.Component {

    render() {
        console.log(this.props.id);
        return (
            <div className="Detail-Person">
                <h1 align={"center"}>Person Detail</h1>
                <Paper className="Person-Paper">
                    <Grid container spacing={12}>
                        <Grid className="Detail-Avatar-Grid" item xs={2}>
                            <Avatar className="Detail-Avatar" src={"https://www.gravatar.com/avatar/" + md5(pers.email)}
                                    alt={"image"}/>
                        </Grid>
                        <Grid item xs={9} className="Detail-Person-Table">
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
                                    <td>{moment(new Date(pers.birthDate * 1000)).format('MM/DD/YYYY')}</td>
                                </tr>
                                <Divider/>
                                <tr>
                                    <td>Room place:</td>
                                    <td>{pers.emplacementBureau}</td>
                                </tr>
                                <tr>
                                    <td>Arrival date:</td>
                                    <td>{moment(new Date(pers.dateArrive * 1000)).format('MM/DD/YYYY')}</td>
                                </tr>
                                <tr>
                                    <td>Post:</td>
                                    <td><Button variant="contained" color={"primary"} onClick={e => goDetailPost(pers.poste.id)}><PostIcon/></Button></td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td><a href={"mailto:" + pers.email}>{pers.email}</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </Paper>
                <Button variant="contained" color="primary">Update</Button>
            </div>
        );
    }
}

export default DetailPerson;
