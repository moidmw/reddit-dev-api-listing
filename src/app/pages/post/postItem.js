import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostItem = props => {
    let { data } = props;

    const getImage = () => {
        if (data.preview) {
            return (
                <img
                    src={data.preview.images[0].source.url}
                    className="post-image img-fluid"
                />
            );
        }
    };

    return (
        <div className={'item-card ' + (props.className || '')}>
            <Link
                to={{ pathname: '/comments', state: { link: data.permalink } }}
                className="post-title">
                {data.title}
                <span className="post-time">{moment(data.created_utc*1000).format('lll')}</span>
                {getImage()}
            </Link>
            
            <div className="mt-3 mb-2">
                <span className="post-author post-info">
                    <i className="fas fa-user" />
                    u/{data.author}
                </span>
                <span className="post-subreddit post-info">
                    <i className="fas fa-link" />
                    {data.subreddit_name_prefixed}
                </span>
                <span className="post-votes post-info">
                    <i className="fas fa-angle-up" />
                    {data.ups - data.downs}
                </span>
                <Link className="post-comment post-info"
                    to={{
                        pathname: '/comments',
                        state: { link: data.permalink }
                    }}>
                    <i className="fas fa-comment" /> {data.num_comments}
                </Link>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default PostItem;
