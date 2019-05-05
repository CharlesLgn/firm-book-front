import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Header from '../header/Header'
import Footer from "../footer/Footer";
import Boot from "../boot/Boot";

function App() {

    return (
        <div className="App">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <div id="header">
                        <Header/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <div id="left">
                    </div>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <div id="middle">
                        <Boot/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <div id="right">
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div id="footer">
                        <Footer/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
