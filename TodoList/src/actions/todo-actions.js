import Api from '../services/api';

export const TODO_ASYNC_REQUEST_STARTED = 'TODO_ASYNC_REQUEST_STARTED';
export const todoAsyncRequestStarted = () => ({
    type: TODO_ASYNC_REQUEST_STARTED,
});

export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const createTodoSuccess = data => ({
    type: CREATE_TODO_SUCCESS,
    data
});

export const CREATE_TODO_FAILED = 'CREATE_TODO_FAILED';
export const createTodoFailed = error => ({
    type: CREATE_TODO_FAILED,
    error
});

export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST';
export const createTodoRequest = todoBody => {
    return dispatch => {
        dispatch(todoAsyncRequestStarted());

        Api.post(`todos`, todoBody)
            .then(({ data }) => {
                dispatch(createTodoSuccess(data));
            })
            .catch(({ message }) => {
                dispatch(createTodoFailed(message));
            });
    };
};

export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const getTodosSuccess = data => ({
    type: GET_TODOS_SUCCESS,
    data
});

export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
export const getTodosFailed = error => ({
    type: GET_TODOS_FAILED,
    error
});

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const getTodosRequest = idUser => {
    return dispatch => {
        dispatch(todoAsyncRequestStarted());

        Api.get(`users/${idUser}`)
            .then(({ data }) => {
                dispatch(getTodosSuccess(data.todos));
            })
            .catch(({ message }) => {
                dispatch(getTodosFailed(message));
            });
    };
};

export const SET_DETAIL_TODO = 'SET_DETAIL_TODO';
export const setDetailTodo = todo => ({
    type: SET_DETAIL_TODO,
    todo
});

export const SHOW_DIALOG = 'SHOW_DIALOG';
export const showDialog = show => ({
    type: SHOW_DIALOG,
    show
});