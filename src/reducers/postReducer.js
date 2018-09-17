import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from '../actions/postActions';

const initialState = {
    isFetching: true,
    posts: []
};

export const redditDev = (state = initialState, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case POST_SUCCESS:
            return {
                isFetching: false,
                posts: { ...action.posts }
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
