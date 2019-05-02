import React from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ReactDOM from "react-dom";
import Menu from "../menu/Menu";
import Grid from "@material-ui/core/Grid";
import Home from "../home/Home";


class Login extends React.Component {
    user = "";
    psw = "";

    render() {
        return (
            <div className="Login">
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={4} />
                    <Grid item xs={12} sm={4} className="Login-grid">
                        <TextField required id="standard-required" label="User" margin="normal"
                                   onChange={this.updateUser}/>
                        <TextField id="standard-password-input" label="Password" type="password"
                                   autoComplete="current-password" margin="normal"
                                   onChange={this.updatePsw}/>
                        <Button variant="contained" color="primary" onClick={this.log}>Log In</Button>
                    </Grid>
                    <Grid item xs={12} sm={4} />
                </Grid>
            </div>
        );
    }

    log = () => {
        let headers = {
            "Content-Type": "application/json",
            "Authorization": "Basic "+  window.btoa(this.user + ":" + this.psw),
        };
        console.log(headers.Authorization);
        fetch("http://localhost:8080/FirmBookBack/user/connect", {headers, })
            .then(response => {
                //console.log(response.json());
                ReactDOM.render(<Menu />, document.getElementById('left'));
                ReactDOM.render(<Home />, document.getElementById('middle'));
            });
    };

    updatePsw = (e) => {
        this.psw = e.target.value;
    };

    updateUser = (e) => {
        this.user = e.target.value;
    };


}

export default Login;
