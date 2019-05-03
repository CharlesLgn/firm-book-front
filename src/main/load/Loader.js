import React from 'react';
import '../footer/Footer.css';
import {CircularProgress, LinearProgress} from "@material-ui/core";

class Loader extends React.Component {
  render() {
    return (
        <div>
            <LinearProgress />
        </div>
    );
  }
}
export default Loader;
