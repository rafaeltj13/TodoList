import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import store from '../store';
import Home from '../components/home';
import Signin from '../components/signin/Signin';
import Signup from '../components/signup/Signup';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route path="/signin" component={Signin} /> */}
          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
