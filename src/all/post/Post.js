import React from 'react';
import './Post.css';
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {PostIcon} from "../../utils/Icon";
import {goDetailPost} from "../../utils/Go";

let id = 0;

function createPerson(libelle, niveau, personFirstName, personnLastName) {
    id += 1;
    return {id, libelle, niveau, personFirstName, personnLastName};
}

const rows = [
    createPerson('Backend developer', 4,'Charles', 'Ligony'),
    createPerson('Frontend developer', 4,'Cyril', 'Challouatte'),
    createPerson('C.E.O',10, 'Lucas', 'Cuoco'),
];

class Post extends React.Component {

    handleClick = id => {
        goDetailPost(id)
    };

    render() {
        return (
            <div className="Post">
                <h1>All Posts</h1>
                <Paper className="Post-Paper">
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell/>
                                <TableCell>Libele</TableCell>
                                <TableCell>Level</TableCell>
                                <TableCell>Person on the post</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id} >
                                    <TableCell>
                                        <Button onClick={e => this.handleClick(row.id)}>
                                            <PostIcon/>
                                        </Button>
                                    </TableCell>
                                    <TableCell>{row.libelle}</TableCell>
                                    <TableCell>{row.niveau}</TableCell>
                                    <TableCell>{row.personnLastName + " " + row.personFirstName}</TableCell>
                                </TableRow>
                            ), this)}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Post;
