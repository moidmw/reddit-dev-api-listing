export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';
import axios from 'axios';

export const requestPost = (reddit) => {
    return {
        type: POST_REQUEST,
        reddit
    };
};

export const receivePost = (reddit, data) => {
    return {
        type: POST_SUCCESS,
        post: data,
        reddit
    };
};

export const requestFailed = (reddit, error) => {
    return {
        type: POST_ERROR,
        post: reddit,
        error
    };
};

export const fetchPost = reddit => dispatch => {
    dispatch(requestPost(reddit));
    return axios.get('https://www.reddit.com/r/all/hot.json?limit=10')
        .then(response => {
            console.log('response', response);
            dispatch(receivePost(response));
        }, error => {
            console.log(error);
            dispatch(requestFailed(error));
        });
};