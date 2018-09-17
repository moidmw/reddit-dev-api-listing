import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../../../actions/postActions';
import { fetchComment } from '../../../actions/commentActions';
import PostItem from './postItem';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';

let limit = 10;

class PostPage extends Component {
    componentDidMount = () => {
        const { dispatch } = this.props;
        const { params } = this.props.match;
        dispatch(fetchPost(params.type, limit));
    };

    componentWillReceiveProps = props => {
        const { dispatch } = this.props;

        if (props.match.url !== this.props.match.url) {
            console.log('props posts', props);
            dispatch(fetchPost(props.match.params.type, limit));
        }
    };

    fetchMorePost = type => {
        const { dispatch, redditDev } = this.props;
        const { params } = this.props.match;
        dispatch(
            fetchPost(params.type, limit, redditDev.posts.data.after, type)
        );
    };

    fetchItemComment = link => {
        const { dispatch } = this.props;
        dispatch(fetchComment(link));
    };

    render() {
        let { redditDev } = this.props;
        let { isFetching } = redditDev;
        let postArr = redditDev.posts.data;
        return (
            <div className="container">
                {isFetching && !redditDev.error ? (
                    <LoadingIndicator />
                ) : !isFetching && redditDev.error ? (
                    <div
                        className="alert alert-danger text-center mt-3"
                        role="alert">
                        {redditDev.error}
                    </div>
                ) : (
                    postArr.children.map((item, index) => (
                        <PostItem
                            key={index}
                            data={item.data}
                            onClick={this.fetchItemComment}
                        />
                    ))
                )}
                <div
                    style={{
                        display:
                            isFetching || redditDev.error ? 'none' : 'block'
                    }}>
                    <div className="d-sm-none d-none d-md-block">
                        <div
                            title="Previous"
                            onClick={this.fetchMorePost.bind(this, 'before')}
                            className="previous-btn post-navigate">
                            <span className="left-chev cheveron" />
                        </div>
                        <div
                            title="Next"
                            onClick={this.fetchMorePost.bind(this, 'after')}
                            className="next-btn post-navigate">
                            <span className="right-chev cheveron" />
                        </div>
                    </div>
                    <div className="d-block d-sm-block d-md-none mb-3">
                        <button
                            className="btn btn-reddit-primary"
                            onClick={this.fetchMorePost.bind(this, 'before')}>
                            Previous
                        </button>
                        <button
                            className="btn btn-reddit-primary float-right"
                            onClick={this.fetchMorePost.bind(this, 'after')}>
                            Next
                        </button>
                    </div>
                </div>
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

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(PostPage);
