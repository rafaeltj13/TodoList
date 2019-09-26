import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { Form } from 'native-base';
import TodoDetails from './TodoDetails';
import Card from '../custom/CustomCard'
import { setDetailTodo, showDialog } from '../../actions/todo-actions';

const TodoList = props => {
    const { todoList, openDialog, detailTodo, todoDialog, open } = props;

    const setDetailTodo = todo => {
        detailTodo(todo);
        openDialog()
    };

    return (
        <Form>
            {todoList.map((todo, index) => (
                <Card todo={todo} key={index} onPress={() => setDetailTodo(todo)}/>
            ))}
            <TodoDetails todo={todoDialog} openDialog={open}/>
        </Form>
    );

};

const mapStateToProps = ({ todo }) => ({
    error: todo.error,
    loading: todo.loading,
    todoList: todo.todoList,
    open: todo.openDialog,
    todoDialog: todo.detailTodo
});

const mapDispatchToProps = dispatch => ({
    detailTodo: todo => dispatch(setDetailTodo(todo)),
    openDialog: () => dispatch(showDialog(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));