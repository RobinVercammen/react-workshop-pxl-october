import React, { Component } from 'react';
import HttpService from '../common/http.service';

export default class Weight extends Component {
    componentWillMount() {
        HttpService.getWeight();
    }
    render() {
        return (
            <h1>Weight</h1>
        )
    }
}