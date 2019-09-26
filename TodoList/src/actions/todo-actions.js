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
    return dispath => {
        dispath(createTodoSuccess(todoBody));
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