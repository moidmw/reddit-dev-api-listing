import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComment } from '../../state/actions/commentActions';
import CommentItem from './commentSection';
import PostItem from '../post/postItem';
import {LoadingIndicator} from '../../shared/LoadingIndicator/LoadingIndicator';

class CommentsPage extends Component {
    componentDidMount = () => {
        let { link } = this.props.location.state;
        const { dispatch } = this.props;
        dispatch(fetchComment(link));
    };

    render() {
        let { comments } = this.props;
        let { isFetching } = this.props.comments;
        return (
            <div className="container">
                {isFetching ? (
                    <LoadingIndicator/>
                ) : (
                    <div>
                        <PostItem data={comments.comments[0].data.children[0].data} className={'fw-card'}/>
                        <CommentItem data={comments.comments[1]} />
                    </div>
                )}
            </div>
        );
    }
}

CommentsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object,
    comments: PropTypes.object
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(CommentsPage);
