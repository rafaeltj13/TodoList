import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { withFormik } from 'formik';
import { createTodoRequest } from '../../actions/todo-actions';
import { Form } from 'native-base';
import TextField from '../custom/CustomTextField';
import Select from '../custom/CustomSelect';
import Button from '../custom/CustomButton';

const TodoForm = props => {
    const fields = props;
    const { isSubmitting, handleSubmit, setSubmitting, loading, error } = props;

    return (
        <Form>
            <TextField
                required
                name={'title'}
                label={'Título'}
                field={fields}
            />
            <TextField
                required
                name={'description'}
                label={'Descrição'}
                field={fields}
            />
            <Select
                required
                name={'status'}
                label={'Status'}
                field={fields}
                items={
                    ['Pendente', 'Fazendo', 'Concluida']
                }
            />

            <Button label={'Criar tarefa'} onClick={handleSubmit} />
        </Form>
    );
};

const mapStateToProps = ({ todo }) => ({
    loading: todo.loading,
    error: todo.error,
});

const mapDispatchToProps = dispatch => ({
    createTodo: todoBody => dispatch(createTodoRequest(todoBody)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withRouter(
        withFormik({
            mapPropsToValues: () => {
                return {
                    title: '',
                    description: '',
                    status: ''
                };
            },

            handleSubmit: (values, { props }) => {
                props.createTodo(values)
            },
        })(TodoForm)
    )
);