import { combineReducers } from 'redux';
import {redditDev} from './postReducer';
import {commentReducer} from './commentReducer';

export const AppReducer = combineReducers({
    redditDev,
    comments: commentReducer
});