import {
    SIGNUP_ASYNC_REQUEST_STARTED,
    SINGUP_SUCCESS,
    SIGNUP_FAILED
} from '../actions/signin-actions';

const initialState = {
    loading: false,
    error: null,
    token: '',
    idUser: ''
};

const signup = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_ASYNC_REQUEST_STARTED:
            return {
                ...state,
                loading: true,
            };

        case SINGUP_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case SIGNUP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default signup;