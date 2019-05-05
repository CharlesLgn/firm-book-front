import React from "react";
import {isLog} from "../../utils/Log";

class Boot extends React.Component {
    render() {
        isLog();
        return  <div className={"Nothing"}/>
    }
}

export default Boot;