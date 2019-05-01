import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header'
import * as serviceWorker from './serviceWorker';
import Login from "./login/Login";

ReactDOM.render(<Header />, document.getElementById('head'));
ReactDOM.render(<Login />, document.getElementById('middle'));

serviceWorker.unregister();
