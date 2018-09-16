export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';
import axios from 'axios';

export const requestPost = (reddit) => ({
    type: POST_REQUEST,
    reddit
});

export const receivePost = (reddit, data) => ({
    type: POST_SUCCESS,
    reddit,
    posts: data
});

export const requestFailed = (error) => {
    console.log('error', error.message);
    return {
        type: POST_ERROR,
        error: error.message
    };
};

export const fetchPost = (reddit, limit, after, type) => dispatch => {
    dispatch(requestPost(reddit));
    let url = `https://www.reddit.com/r/all/${reddit}.json?limit=${limit}`;
    if(after) {
        url = `https://www.reddit.com/r/all/${reddit}.json?limit=${limit}&${type}=${after}`;
    }
    return axios.get(url)
        .then(response => {
            console.log('response', response);
            dispatch(receivePost(reddit, response.data));
        }, error => {
            console.log(error);
            dispatch(requestFailed(error));
        });
};