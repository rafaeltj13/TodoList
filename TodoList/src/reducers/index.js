import { combineReducers } from 'redux';
import todoReducer from './todo';
import signinReducer from './signin';
import signupReducer from './signup';

export default combineReducers({
    signin: signinReducer,
    signup: signupReducer,
    todo: todoReducer,
});