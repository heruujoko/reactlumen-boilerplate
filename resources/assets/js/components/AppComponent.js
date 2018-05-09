
import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import SidebarMenuComponent from '../components/Shared/SidebarMenuComponent';
import HeaderMenuComponent from '../components/Shared/HeaderMenuComponent'

class AppComponent extends Component {

    render() {

        const { Header } = Layout;
        const {children, params, routes} = this.props;
        const pathname = this.props.pathname;

        return (
            <Layout>
                <SidebarMenuComponent pathname={pathname} />
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <HeaderMenuComponent pathname={pathname} />
                    </Header>
                    <div style={{ height: '100vh' }}>
                        {children}
                    </div>
                </Layout>
            </Layout>
        );

    }
}

export default AppComponent;