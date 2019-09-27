import {
    TODO_ASYNC_REQUEST_STARTED,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAILED,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILED,
    SET_DETAIL_TODO,
    SHOW_DIALOG
} from '../actions/todo-actions';

const initialState = {
    loading: false,
    error: null,
    todoList: [{
        title: 'teste',
        description: 'teste',
        status: 'Fazendo'
    }],
    detailTodo: { title: '', description: '', status: '' },
    openDialog: false
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
            };

        case CREATE_TODO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todoList: action.data
            };

        case GET_TODOS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case SET_DETAIL_TODO:
            return {
                ...state,
                detailTodo: action.todo
            }

        case SHOW_DIALOG:
            return {
                ...state,
                openDialog: action.show
            }

        default:
            return state;
    }
};

export default todo;