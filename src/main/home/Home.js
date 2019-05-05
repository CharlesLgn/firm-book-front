import React from 'react';
import './Home.css';
import {Button, Grid, Paper} from "@material-ui/core";
import {AddPersonIcon, AddPostIcon, PersonIcon, PostIcon} from "../../utils/Icon";
import {createPerson, createPost, goPerson, goPost} from "../../utils/Go";
import ReactDOM from "react-dom";
import Nothing from "../load/Nothing";

class Home extends React.Component {

    render() {
        ReactDOM.render(<Nothing/>, document.getElementById('loader'));
        return (
            <div className="Home">
                <h1>Welcome</h1>
                <Paper>
                    <Grid container spacing={12}>
                        <Grid item xs={6}>
                            <Button onClick={goPerson}>
                                <PersonIcon/>
                                <p> See all People</p>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={goPost}>
                                <PostIcon/>
                                <p> See all Post</p>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={createPerson}>
                                <AddPersonIcon/>
                                <p> Add a Person</p>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={createPost}>
                                <AddPostIcon/>
                                <p> Add a Post</p>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default Home;
