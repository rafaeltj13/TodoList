import { combineReducers } from 'redux';
import todoReducer from './todo'

export default combineReducers({
    signin: () => null,
    todo: todoReducer
});