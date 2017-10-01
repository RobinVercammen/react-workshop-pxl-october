import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Calories from './calories/calories.page';
import Dashboard from './dashboard/dashboard.page';
import Habits from './habits/habits.page';
import Settings from './settings/settings.page';
import Weight from './weight/weight.page';

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
            <Router>
                <div>
                    <AppBar
                        title="Dashboard"
                        onLeftIconButtonTouchTap={this.toggleDrawer}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <Drawer open={this.state.open}>
                        <MenuItem onClick={this.close}><Link to="/">Dashboard</Link></MenuItem>
                        <MenuItem onClick={this.close}><Link to="/weight">Weight</Link></MenuItem>
                        <MenuItem onClick={this.close}><Link to="/calories">Calories</Link></MenuItem>
                        <MenuItem onClick={this.close}><Link to="/habits">Habits</Link></MenuItem>
                        <MenuItem onClick={this.close}><Link to="/settings">Settings</Link></MenuItem>
                    </Drawer>
                    <div className="content">
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/weight" component={Weight} />
                        <Route exact path="/calories" component={Calories} />
                        <Route exact path="/habits" component={Habits} />
                        <Route exact path="/settings" component={Settings} />
                    </div>
                </div>
            </Router >
        )
    }
}