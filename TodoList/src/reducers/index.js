import { combineReducers } from 'redux';
import todoReducer from './todo';
import signinReducer from './signin';

export default combineReducers({
    signin: signinReducer,
    todo: todoReducer
});