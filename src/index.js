import './assets/css/material-dashboard-react.css?v=1.8.0';

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import Admin from './src-Admin/Admin';
import Login from './src-Auth/Login';
import Page404 from './src-Auth/Page404';

const hist = createBrowserHistory();
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({}),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Router history={hist}>
        <Switch>
          <Route component={Login} exact path="/" />
          <Route component={Admin} path="/admin" />
          <Route component={Page404} />
        </Switch>
      </Router>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById(`root`),
);
