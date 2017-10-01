import React, { Component } from 'react';
import HttpService from '../common/http.service';
import { connect } from 'react-redux';

class Weight extends Component {
    componentWillMount() {
        this.props.setTitle();
        HttpService.getWeight();
    }
    render() {
        return (
            <h1>Weight</h1>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTitle: () => {
            dispatch({ type: 'SET_TITLE', payload: 'Weight' });
        }
    }
}


export default connect(null, mapDispatchToProps)(Weight)
