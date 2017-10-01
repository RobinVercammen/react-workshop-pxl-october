import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem'

export default class Layout extends Component {
    constructor() {
        super();
        this.state = { open: false }
    }
    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    }
    close = () => {
        this.setState({ open: false });
    }
    render() {
        return (
            <div>
                <AppBar
                    title="Dashboard"
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Drawer open={this.state.open}>
                    <MenuItem onClick={this.close}>Dashboard</MenuItem>
                    <MenuItem onClick={this.close}>Weight</MenuItem>
                    <MenuItem onClick={this.close}>Calories</MenuItem>
                    <MenuItem onClick={this.close}>Habits</MenuItem>
                    <MenuItem onClick={this.close}>Settings</MenuItem>
                </Drawer>
            </div>
        )
    }
}