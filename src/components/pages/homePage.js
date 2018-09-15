import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPost} from '../state/actions/actions';

class HomePage extends Component {
    componentDidMount = () => {
        const {dispatch} = this.props;
        dispatch(fetchPost('new'));
    };

    render() {
        return <div>this is home page</div>;
    }
}

HomePage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
    return state;
};
  

export default connect(mapStateToProps)(HomePage);
