import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-native';
import TodoRoutes from '../todo/TodoRoutes';

const HomeRoutes = () => {
  return(
    <Switch>
      <Route path="/todo" component={TodoRoutes} />
      <Redirect to={{ pathname: '/todo/list' }} />
    </Switch>
  );
};

export default withRouter(HomeRoutes);