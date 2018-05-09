import React, { Component } from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// pages
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const BrowserHistory = createHistory();

export default (
  <Router history={BrowserHistory}>
    <div>
      <Route exact path="/" name="Login" component={Login} />
      <Route path="/dashboard" name="Dashboard" component={Dashboard} />
    </div>
  </Router>
)
