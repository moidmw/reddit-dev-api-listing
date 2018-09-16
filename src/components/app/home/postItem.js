import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PostItem = (props) => {
    console.log('props', props);
    
    let {data} = props;
    console.log(' {source}',props.data);
    return (
        <div>
            <Link to={{ pathname: '/comments', state: { link: data.permalink} }} className="h5">{data.title}</Link>
            {data.thumbnail ? <img src={data.thumbnail} className="post-thumbnail"/> : void 0 }
            
        </div>
    );
};

PostItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
};


export default PostItem;