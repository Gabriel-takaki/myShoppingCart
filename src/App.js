import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContextProviders from './ContextProvider';

import {
  Login,
  Search,
} from './pages/Index';


class App extends React.Component {
  render() {
    return (
      <ContextProviders>
<BrowserRouter>
      <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/search" component={ Search } />
      </Switch>
      </BrowserRouter>
      </ContextProviders>
    );
  }
}

export default App;
