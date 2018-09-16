import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../../state/actions/postActions';
import {fetchComment} from '../../state/actions/commentActions';
import PostItem from './postItem';

let limit = 1;
let postType = 'hot';

class HomePage extends Component {
    componentDidMount = () => {
        const { dispatch } = this.props;
        dispatch(fetchPost(postType, limit));
    };

    componentWillReceiveProps = (props) => {
        console.log('props received', props, this.props);
    };

    fetchMorePost = (type) => {
        const { dispatch, redditDev } = this.props;
        dispatch(fetchPost(postType, limit, redditDev.posts.data.after, type));
    };

    fetchItemComment = (link) => {
        const { dispatch } = this.props;
        dispatch(fetchComment(link));
    }

    render() {
        let {redditDev} = this.props; 
        let {isFetching} = redditDev;
        let postArr = redditDev.posts.data;
        console.log('postarr', isFetching, postArr);
        return (
            <div>
                {isFetching ? (
                    <h5>Loading</h5>
                ) : (
                    postArr.children.map((item, index) => (
                        <PostItem key={index} data={item.data} onClick={this.fetchItemComment}/>
                    ))
                )}
                <button onClick={this.fetchMorePost.bind(this, 'before')}>Previous</button>
                <button onClick={this.fetchMorePost.bind(this, 'after')}>Next</button>
            </div>
        );
    }
}

HomePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    redditDev: PropTypes.object
};

const mapStateToProps = (state, props) => {
    console.log('mstp', state, props);
    return state;
};

export default connect(mapStateToProps)(HomePage);
