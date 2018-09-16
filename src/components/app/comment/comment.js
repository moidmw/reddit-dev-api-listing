import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComment } from '../../state/actions/commentActions';
import CommentItem from './commentItem';
import PostItem from './postItemBig';

class CommentsPage extends Component {
    componentDidMount = () => {
        let { link } = this.props.location.state;
        const { dispatch } = this.props;
        dispatch(fetchComment(link));
    };

    render() {
        console.log('this', this);
        let { comments } = this.props;
        let { isFetching } = this.props.comments;
        return (
            <div>
                <PostItem post={comments.comments[0]} />
                {isFetching ? (
                    <p>Loading</p>
                ) : <CommentItem data={comments.comments[1]} />
                }
            </div>
        );
    }
}

CommentsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object,
    comments: PropTypes.object
};

const mapStateToProps = (state, props) => {
    console.log('comment mstp', state, props);
    return state;
};

export default connect(mapStateToProps)(CommentsPage);
