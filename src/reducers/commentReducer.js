import {COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_ERROR} from '../actions/commentActions';

const initialState = {
    isFetching: true,
    comments: []
};

export const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case COMMENT_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case COMMENT_SUCCESS:
            return {
                isFetching: false,
                comments: {...action.posts}
            };
        case COMMENT_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
};