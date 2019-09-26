import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/list`} component={TodoList} />
      <Route path={`${match.url}/create`} component={TodoForm} />
      <Redirect to={{ pathname: '/' }} />
    </Switch>
  );
};

export default withRouter(TodoRoutes);