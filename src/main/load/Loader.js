import React from 'react';
import '../footer/Footer.css';
import {LinearProgress} from "@material-ui/core";

class Loader extends React.Component {
    render() {
        return (
            <div className="Progress-Loader">
                <LinearProgress/>
            </div>
        );
    }
}

export default Loader;
