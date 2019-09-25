import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import store from '../store';
import Home from '../components/home';

const App = () => {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
    </Provider>
  );
};

export default App;
