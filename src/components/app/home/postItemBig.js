import React from 'react';
import PropTypes from 'prop-types';

const PostItemBig = (props) => {
    console.log('post item', props);
    return(
        <div>
            Comment section
        </div>
    );
};

PostItemBig.propTypes = {
    location: PropTypes.object
};


export default PostItemBig;