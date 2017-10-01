import React, { Component } from 'react';
import { connect } from 'react-redux';

class Habits extends Component {
    componentWillMount() {
        this.props.setTitle();
    }
    render() {
        return (
            <h1>Habits</h1>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTitle: () => {
            dispatch({ type: 'SET_TITLE', payload: 'Habits' });
        }
    }
}

export default connect(null, mapDispatchToProps)(Habits)