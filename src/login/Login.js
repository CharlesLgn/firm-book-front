import React from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ReactDOM from "react-dom";
import Menu from "../main/menu/Menu";
import Grid from "@material-ui/core/Grid";
import Home from "../main/home/Home";
import Nothing from "../main/load/Nothing";
import {isLog} from "../utils/Log";


class Login extends React.Component {
    user = localStorage.getItem('user');
    psw = localStorage.getItem('psw');

    render() {
        return (
            <div className="Login">
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={4}/>
                    <Grid item xs={12} sm={4} className="Login-grid">
                        <TextField required id="standard-required" label="User" margin="normal"
                                   onChange={this.updateUser}/>
                        <TextField id="standard-password-input" label="Password" type="password"
                                   autoComplete="current-password" margin="normal"
                                   onChange={this.updatePsw}/>
                        <Button variant="contained" color="primary" onClick={this.log}>Log In</Button>
                    </Grid>
                    <Grid item xs={12} sm={4}/>
                </Grid>
            </div>
        );
    }

    log = () => {
        localStorage.setItem('user', this.user);
        localStorage.setItem('psw', this.psw);
        if (isLog()) {
            ReactDOM.render(<Home/>, document.getElementById('middle'));
            ReactDOM.render(<Nothing/>, document.getElementById('loader'));
        }
    };


    updatePsw = (e) => {
        this.psw = e.target.value;
    };

    updateUser = (e) => {
        this.user = e.target.value;
    };


}

export default Login;
