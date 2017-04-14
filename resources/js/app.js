import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import store from './store/store'
import createHistory from 'history/createBrowserHistory'

let browserHistory = createHistory();

ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);
