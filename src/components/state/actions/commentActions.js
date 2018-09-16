export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_ERROR = 'COMMENT_ERROR';
import axios from 'axios';

export const requestPost = (reddit) => {
    console.log('on request', reddit);
    return {
        type: COMMENT_REQUEST,
        reddit
    };
};

export const receivePost = (reddit, data) => {
    console.log('on success', reddit, data);
    return {
        type: COMMENT_SUCCESS,
        reddit,
        posts: data
    };
};

export const requestFailed = (error) => {
    console.log('on fail', error.message);
    return {
        type: COMMENT_ERROR,
        error: error.message
    };
};

export const fetchComment = (permalink) => dispatch => {
    console.log('on fetch', permalink);
    dispatch(requestPost(permalink));
    let url = `https://www.reddit.com${permalink.substring(0, permalink.length - 1)}.json`;
    
    return axios.get(url)
        .then(response => {
            console.log('response', response);
            dispatch(receivePost(permalink, response.data));
        }, error => {
            console.log(error);
            dispatch(requestFailed(error));
        });
};