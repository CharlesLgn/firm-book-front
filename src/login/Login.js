import React from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
    return (
        <div className="Login">
            <table>
                <tbody>
                <tr>
                    <td>User :</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Password :</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button onClick={log}>Loggin</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

function log() {
    axios.get("http://localhost:8080/FirmBook/user/connect")
        .then(result => result.json())
        .then(items => this.setState({items}))
}

export default Login;
