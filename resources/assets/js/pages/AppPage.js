import React, {Component} from 'react';
import AppContainer from '../containers/AppContainer';
import 'antd/dist/antd.min.css'

export default ({params, routes, children}) => {
    // Here container
    const pathname = children.props.location.pathname;
    return (
        <AppContainer routes={routes} params={params} pathname={pathname}>
            {children}
        </AppContainer>
    );
}
