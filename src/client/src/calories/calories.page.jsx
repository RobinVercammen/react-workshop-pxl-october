import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calories extends Component {
    componentWillMount() {
        this.props.setTitle();
    }
    render() {
        return (
            <h1>Calories</h1>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTitle: () => {
            dispatch({ type: 'SET_TITLE', payload: 'Calories' });
        }
    }
}

export default connect(null, mapDispatchToProps)(Calories)
