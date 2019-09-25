import React from 'react';
import { Route, withRouter, Switch } from 'react-router-native';
import TodoList from '../todo/TodoList';

const HomeRoutes = () => {
  return(
    <Switch>
      <Route exact path="/" component={TodoList} />
      {/* <Route path="/create" component={} /> */}
    </Switch>
  );
};

export default withRouter(HomeRoutes);