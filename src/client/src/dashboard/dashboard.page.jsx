import React, { Component } from 'react';
import HttpService from '../common/http.service';

export default class Dashboard extends Component {
    componentWillMount() {
        this.loadData();
    }
    loadData() {
        HttpService.getDashboard().then(console.log);
    }
    render() {
        return (
            <h1>Dashboard</h1>
        )
    }
}