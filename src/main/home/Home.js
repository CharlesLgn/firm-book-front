import React from 'react';
import './Home.css';
import {Button, Grid} from "@material-ui/core";
import {PersonIcon, PostIcon, ReseachIcon} from "../../utils/Icon";
import {goPerson, goPost, goResearch} from "../../utils/Go";

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <h1>Welcome</h1>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={goResearch}>
                            <ReseachIcon/>
                            <p> Research a Person</p>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={goPerson}>
                            <PersonIcon/>
                            <p> See all People</p>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={goPost}>
                            <PostIcon/>
                            <p> See all Post</p>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;
