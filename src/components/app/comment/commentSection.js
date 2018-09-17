import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './commentItem';

const CommentSection = props => {
    let { data } = props.data;

    //normalize comments
    const flatComments = comments => {
        let result = [];
        comments.forEach(({ data: cmt }) => {
            if (!cmt.children) {
                const replies = getReplies(cmt);
                result.push([cmt, ...replies]);
            }
        });
        return result;
    };

    const getReplies = comment => {
        if (!comment.replies) {
            return [];
        }
        let replies = [];
        const { children } = comment.replies.data;
        children.forEach(child => {
            if (child.kind !== 'more') {
                const rep = child.data;
                const moreReps = getReplies(rep);
                replies = replies.concat(rep, moreReps);
            }
        });
        return replies;
    };
    let comments = flatComments(data.children);
        <div className="comment-section">
            {comments &&
                comments.map((level, i) => {
                    return (
                        <div key={i} className="comment-block">
                            {level.map(cmt => {
                                return <CommentItem key={cmt.id} cmt={cmt} />;
                            })}
                        </div>
                    );
                })}
        </div>
    );
};



CommentSection.propTypes = {
    location: PropTypes.object,
    data: PropTypes.object,
};

export default CommentSection;
