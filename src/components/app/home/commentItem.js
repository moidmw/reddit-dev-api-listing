import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';


const CommentItem = (props) => {
    let {data} = props.data;
    
    const getReplies = (dataObj) => {
        console.log('dataObj', dataObj);
        let reply = $('<ul></ul>');

        if(data.kind === 't1'){
            // let {data} = dataObj;
            // let {replies} = dataObj; 
            
            reply.append(<li>data.body</li>);

        }
        // if(data.kind === 'Listing'){

        // }
    };

    return(
        <div>
            {data.body}
            {getReplies(props)}
        </div>
    );
};

CommentItem.propTypes = {
    location: PropTypes.object,
    data: PropTypes.object
};


export default CommentItem;