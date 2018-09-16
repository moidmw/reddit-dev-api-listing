/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
// import $ from 'jquery';

const CommentItem = props => {
    let { data } = props.data;
    console.log('data', data);

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
    let comments = flatComments(data.children)
    console.log(comments);
    return (
        <div>
            {comments &&
                comments.map((level, i) => {
                    console.log('level', level);
                    return (
                        <div key={i} className="comment-block">
                            {level.map(cmt => {
                                 console.log('cmt', cmt)
                                 return <Comment key={cmt.id} cmt={cmt} />
                            })}
                        </div>
                    );
                })}
        </div>
    );
};

const Comment = ({ cmt }) => {
    return (
      <div className="comment" style={{ marginLeft: `${cmt.depth}rem` }}>
        <div>
          <span className="comment__author">{cmt.author}</span>
          <span className="comment__score">{cmt.score}</span>
        </div>
        <div>{cmt.body}</div>
      </div>
    );
  };

CommentItem.propTypes = {
    location: PropTypes.object,
    data: PropTypes.object
};

export default CommentItem;
