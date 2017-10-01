import React, { Component } from 'react';
import HttpService from '../common/http.service';
import { connect } from 'react-redux';

class Dashboard extends Component {
    componentWillMount() {
        this.props.setTitle();
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTitle: () => {
            dispatch({ type: 'SET_TITLE', payload: 'Dashboard' });
        }
    }
}


export default connect(null, mapDispatchToProps)(Dashboard)