import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import Card from '../custom/CustomCard'
import { Form } from 'native-base';

const TodoList = props => {
    const { todoList } = props;

    return (
        <Form>
            {todoList.map((todo, index) => (
                <Card todo={todo} key={index} />
            ))}
        </Form>
    );

};

const mapStateToProps = ({ todo }) => ({
    error: todo.error,
    loading: todo.loading,
    todoList: todo.todoList
});

export default connect(mapStateToProps, null)(withRouter((TodoList)));