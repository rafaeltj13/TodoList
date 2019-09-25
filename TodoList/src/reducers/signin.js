import { AsyncStorage } from 'react-native';
import {
    SIGNIN_ASYNC_REQUEST_STARTED,
    SIGNIN_SUCCESS,
    SIGNIN_FAILED
} from '../actions/signin-actions';

const initialState = {
    loading: false,
    error: null,
    token: '',
    idUser: ''
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_ASYNC_REQUEST_STARTED:
            return {
                ...state,
                loading: true,
            };

        case SIGNIN_SUCCESS:
            AsyncStorage.setItem('signin', `Bearer ${action.data.token}`)

            return {
                ...state,
                loading: false,
                token: action.data.token,
                idUser: action.data.idUser
            };

        case SIGNIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                token: '',
                idUser: ''
            };

        default:
            return state;
    }
};

export default todo;