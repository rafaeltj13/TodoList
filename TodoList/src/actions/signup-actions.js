import Api from '../services/api';

export const SIGNUP_ASYNC_REQUEST_STARTED = 'SIGNUP_ASYNC_REQUEST_STARTED';
export const signupAsyncRequestStarted = () => ({
    type: SIGNUP_ASYNC_REQUEST_STARTED,
});

export const SINGUP_SUCCESS = 'SINGUP_SUCCESS';
export const signupSuccess = data => ({
    type: SINGUP_SUCCESS,
    data
});

export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const signupFailed = error => ({
    type: SIGNUP_FAILED,
    error
});

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const signupRequest = userBody => {
    return dispatch => {
        dispatch(signupAsyncRequestStarted())
    }
};