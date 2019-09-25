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
            return {
                ...state,
                loading: false,
                token: action.data.token,
                idUser: action.data.idUser
            };

        case CREATE_TODO_FAILED:
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