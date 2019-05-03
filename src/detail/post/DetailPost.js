import React from 'react';
import './DetailPost.css';
import {Button, Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {PersonDataIcon} from "../../utils/Icon";
import {goDetailPerson} from "../../utils/Go";

const post = {
    id: 1,
    libelle: "Developpeur Front",
    niveau: 3,
    personne: {
        id: 1
    },
    responssable: {
        id: 2
    }
};

class DetailPost extends React.Component {

    render() {
        return (
            <div className="Detail-Post">
                <h1>Post Detail</h1>
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
                    <ListItem button onClick={e => goDetailPerson(post.personne.id)}>
                        <ListItemIcon>
                            <PersonDataIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Person"/>
                    </ListItem>
                    <ListItem button onClick={e => goDetailPerson(post.responssable.id)}>
                        <ListItemIcon>
                            <PersonDataIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Boss"/>
                    </ListItem>
                </List>
                <Button variant="contained" color="primary" >Update</Button>
            </div>
        );
    }
}

export default DetailPost;
