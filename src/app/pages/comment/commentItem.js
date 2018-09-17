import React from 'react';
import PropTypes from 'prop-types';

const CommentItem = ({ cmt }) => {
    const htmlDecode = input => {
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
    };
    return (
        <div className="comment" style={{ marginLeft: `${cmt.depth * 20}px` }}>
            <div
                className="comment-body"
                dangerouslySetInnerHTML={{ __html: htmlDecode(cmt.body_html) }}
            />

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
