import {
    TODO_ASYNC_REQUEST_STARTED,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAILED
} from '../actions/todo-actions';

const initialState = {
    loading: false,
    error: null,
    todoList: []
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ASYNC_REQUEST_STARTED:
            return {
                ...state,
                loading: true,
            };

        case CREATE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todoList: [...state.todoList, action.data]
            };

        case CREATE_TODO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

export default todo;