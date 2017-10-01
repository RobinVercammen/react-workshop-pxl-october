import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
    componentWillMount() {
        this.props.setTitle();
    }
    render() {
        return (
            <h1>Settings</h1>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTitle: () => {
            dispatch({ type: 'SET_TITLE', payload: 'Settings' });
        }
    }
}


export default connect(null, mapDispatchToProps)(Settings)