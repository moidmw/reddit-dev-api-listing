import {POST_REQUEST, POST_SUCCESS, POST_ERROR} from '../actions/actions';

const initialState = {
    isFetching: true,
    posts: []
};

export const redditDev = (state = initialState, action) => {
    console.log('post redux', state, action);
    switch(action.type) {
        case POST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.data
            };
        case POST_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
};