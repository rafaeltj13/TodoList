import React, { useEffect } from 'react';
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

    useEffect(
        () => {
            if (!loading && isSubmitting) {
                setSubmitting(false);
                if (!error) {
                    props.history.push('/todo/list');
                }
            }
        },
        [loading],
    );

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

const mapStateToProps = ({ todo, signin }) => ({
    loading: todo.loading,
    error: todo.error,
    idUser: signin.idUser
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
                props.createTodo({ ...values, userId: props.idUser })
            },
        })(TodoForm)
    )
);