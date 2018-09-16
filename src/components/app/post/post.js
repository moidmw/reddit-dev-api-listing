import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../../state/actions/postActions';
import { fetchComment } from '../../state/actions/commentActions';
import PostItem from './postItem';

let limit = 10;
let postType = 'hot';

class PostPage extends Component {
    componentDidMount = () => {
        const { dispatch } = this.props;
        dispatch(fetchPost(postType, limit));
    };

    componentWillReceiveProps = props => {
        console.log('props received', props, this.props);
    };

    fetchMorePost = type => {
        const { dispatch, redditDev } = this.props;
        dispatch(fetchPost(postType, limit, redditDev.posts.data.after, type));
    };

    fetchItemComment = link => {
        const { dispatch } = this.props;
        dispatch(fetchComment(link));
    };

    render() {
        let { redditDev } = this.props;
        let { isFetching } = redditDev;
        let postArr = redditDev.posts.data;
        console.log('postarr', isFetching, postArr);
        return (
            <div className="container">
                {isFetching ? (
                    <h3 className="text-center mt-3" style={{color: '#9e9e9e'}}><i className="fas fa-spinner fa-pulse mr-2"></i>Loading</h3>
                ) : (
                    postArr.children.map((item, index) => (
                        <PostItem
                            key={index}
                            data={item.data}
                            onClick={this.fetchItemComment}
                        />
                    ))
                )}
                <div title="Previous" onClick={this.fetchMorePost.bind(this, 'before')} className="previous-btn post-navigate">
                    <span className="left-chev cheveron"></span>
                </div>
                <div title="Next" onClick={this.fetchMorePost.bind(this, 'after')} className="next-btn post-navigate"><span className="right-chev cheveron"></span></div>
            </div>
        );
    }
}

PostPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    redditDev: PropTypes.object,
    params: PropTypes.object,
    match: PropTypes.object
};

const mapStateToProps = (state, props) => {
    console.log('mstp', state, props);
    return state;
};

export default connect(mapStateToProps)(PostPage);
