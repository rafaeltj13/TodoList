import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-native';
import TodoList from '../todo/TodoList';
import TodoForm from '../todo/TodoForm';

const HomeRoutes = () => {
  return(
    <Switch>
      <Route exact path="/todoList" component={TodoList} />
      <Route path="/create" component={TodoForm} />
      <Redirect to={{ pathname: '/todoList' }} />
    </Switch>
  );
};

export default withRouter(HomeRoutes);