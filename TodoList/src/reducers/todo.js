import {
    TODO_ASYNC_REQUEST_STARTED,
} from '../actions/todo-actions';

const initialState = {
    loading: false,
    error: null,
    todoList: [
        {
            title: 'Estudar',
            description: 'Estudar para a entrevista',
            status: 'Pendente'
        },
        {
            title: 'Jogar',
            description: 'Jogar um fifinha',
            status: 'Fazendo'
        },
        {
            title: 'Fumar um',
            description: 'PQ EU N POSSO F1 DO BOM',
            status: 'Concluida'
        },
        {
            title: 'Jogar',
            description: 'Jogar um fifinha',
            status: 'Fazendo'
        },
        {
            title: 'Fumar um',
            description: 'PQ EU N POSSO F1 DO BOM',
            status: 'Concluida'
        },
        {
            title: 'Jogar',
            description: 'Jogar um fifinha',
            status: 'Fazendo'
        },
        {
            title: 'Fumar um',
            description: 'PQ EU N POSSO F1 DO BOM',
            status: 'Concluida'
        },
    ]
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ASYNC_REQUEST_STARTED:
            return {
                ...state,
                loading: true,
            };

        default:
            return state;
    }
};

export default todo;