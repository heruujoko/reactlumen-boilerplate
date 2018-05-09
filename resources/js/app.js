import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import routes from './routes'
import store from './store/store'
import createHistory from 'history/createBrowserHistory'

let browserHistory = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
