
import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import HeaderMenuComponent from '../components/Shared/HeaderMenuComponent';

class AppComponent extends Component {

    render() {

        const { Header } = Layout;
        const {children, params, routes} = this.props;
        const pathname = this.props.pathname;

        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <HeaderMenuComponent pathname={pathname} />
                </Header>
                <div style={{ height: '100vh' }}>
                    {children}
                </div>
            </Layout>
        );

    }
}

export default AppComponent;