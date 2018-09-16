import React from 'react';
import PropTypes from 'prop-types';


const CommentItem = ({ cmt }) => {
    return (
        <div className="comment" style={{ marginLeft: `${cmt.depth*20}px` }}>
            <div className="comment-body">{cmt.body}</div>
            <div className="comment-info">
                <span className="comment-author">{cmt.author}</span>
                <span className="comment-score">{cmt.score}</span>
            </div>
            
        </div>
    );
};


CommentItem.propTypes = {
    cmt: PropTypes.object
};

export default CommentItem;
