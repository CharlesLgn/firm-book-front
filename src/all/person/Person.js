import React from 'react';
import './Person.css';
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {PersonDataIcon} from "../../utils/Icon";
import {goDetailPerson} from "../../utils/Go";

let id = 0;

function createPerson(firstName, lastName, email,) {
    id += 1;
    return {id, firstName, lastName, email};
}

const rows = [
    createPerson('Charles', 'Ligony', 'charles.ligony@gmail.com'),
    createPerson('Cyril', 'Challouatte', 'cyrilchc54@gmail.com'),
    createPerson('Lucas', 'Cuoco', 'lucas@cuoco.fr'),
    createPerson('Loïc', 'Noël', 'bvxyz@hotmail.fr'),
    createPerson('Mariia', 'Kokot', 'a@b.cde'),
];


class Person extends React.Component {

    handleClick = id => {
        goDetailPerson(id)
    };

    render() {
        return (
            <div className="Person">
                <h1>All People</h1>
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
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Button onClick={e => this.handleClick(row.id)}>
                                            <PersonDataIcon/>
                                        </Button>
                                    </TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>
                                        <a href={"mailto:" + row.email}>{row.email}</a>
                                    </TableCell>
                                </TableRow>
                            ), this)}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Person;
