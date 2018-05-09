
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';


class HeaderMenuComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            defaultSelectedKeys: ''
        };
    }


    componentWillMount() {
        // here component will mount
        const appPath = this.props.pathname;
        const splitPath = appPath.split("/");
        const currentPath = splitPath[splitPath.length -1];
        this.setState({ defaultSelectedKeys: (currentPath === "account") ? '1':'' });
    }

    render() {

        return (
            <Menu
                theme="light"
                mode="horizontal"
                style={{ lineHeight: '64px', float: 'right' }}
                defaultSelectedKeys={[ this.state.defaultSelectedKeys ]}
            >
                <Menu.Item key="1">
                    <a href={"account"}>
                        <Icon type="wallet" /> Account
                    </a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href={"signout"}>
                        <Icon type="logout" /> Signout
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default HeaderMenuComponent;