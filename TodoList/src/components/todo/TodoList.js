import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { ScrollView } from 'react-native';
import Card from '../custom/CustomCard'

const TodoList = props => {
    const { todoList } = props;

    return (
        <ScrollView>
            {todoList.map((todo, index) => (
                <Card todo={todo} key={index} />
            ))}
        </ScrollView>
    );

};

const mapStateToProps = ({ todo }) => ({
    error: todo.error,
    loading: todo.loading,
    todoList: todo.todoList
});

export default connect(mapStateToProps, null)(withRouter((TodoList)));