import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppPage from './pages/AppPage';
import HomePage from './pages/HomePage';
import SamplePage from './pages/SamplePage';
import AccountPage from './pages/AccountPage';

export default(
    <Route path="/app/home" component={AppPage}>
        <IndexRoute component={HomePage} />
        <Route path="/app/sample" component={SamplePage} />
        <Route path="/app/account" component={AccountPage} />
    </Route>
);