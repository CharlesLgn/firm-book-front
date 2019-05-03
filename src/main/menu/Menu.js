import React from 'react';
import './Menu.css';
import {
    Button,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from "@material-ui/core";
import {HomeIcon, MenuIcon, PersonIcon, PostIcon, ReseachIcon} from "../../utils/Icon";
import {goHome, goPerson, goPost, goResearch} from "../../utils/Go";


class Menu extends React.Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };


    render() {
        const sideList = (
            <div className="Menu">
                <List>
                    <ListItem button key="Home" onClick={goHome}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Research" onClick={goResearch}>
                        <ListItemIcon>
                            <ReseachIcon />
                        </ListItemIcon>
                        <ListItemText primary="Research"/>
                    </ListItem>
                    <ListItem button key="people" onClick={goPerson}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="All People"/>
                    </ListItem>
                    <ListItem button key="post" onClick={goPost}>
                        <ListItemIcon>
                            <PostIcon />
                        </ListItemIcon>
                        <ListItemText primary="All Posts"/>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className="Menu">
                <Button onClick={this.toggleDrawer("left", true)}>
                    <IconButton aria-label="Delete">
                        <MenuIcon />
                    </IconButton>
                </Button>
                <SwipeableDrawer open={this.state.left}
                                 onClose={this.toggleDrawer("left", false)}
                                 onOpen={this.toggleDrawer("left", true)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer("left", false)}
                        onKeyDown={this.toggleDrawer("left", false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default Menu;
