
import React, {Component} from 'react';
import { Layout, Menu, Icon, Sider } from 'antd';


class SidebarMenuComponent extends Component {

    constructor(props) {

        super(props);

        // Default states and values assigned to variables on page load
        this.state = {
            defaultSelectedKeys: '',
            currentPath: '',
            menuItems: [
                {
                    'id': 1,
                    'title': 'Dashboard',
                    'has_sub_menu': false,
                    'is_sub_menu': false,
                    'target': 'home',
                    'icon_class': 'pushpin-o'
                },
                {
                    'id': 2,
                    'title': 'Reference',
                    'has_sub_menu': true,
                    'is_sub_menu': false,
                    'target': '_self',
                    'icon_class': 'book',
                    'items': [
                        {
                            'id': 3,
                            'title': 'Option 1',
                            'has_sub_menu': false,
                            'is_sub_menu': true,
                            'target': 'sample',
                            'icon_class': 'book'
                        }
                    ]
                },
                {
                    'id': 4,
                    'title': 'Learn',
                    'has_sub_menu': false,
                    'is_sub_menu': false,
                    'target': '_self',
                    'icon_class': 'book'
                },
                {
                    'id': 5,
                    'title': 'Trending',
                    'has_sub_menu': false,
                    'is_sub_menu': false,
                    'target': '_self',
                    'icon_class': 'book'
                }
            ]
        };

        this.renderMenuItem = this.renderMenuItem.bind(this);
        this.renderSubMenuItem = this.renderSubMenuItem.bind(this);
        this.renderElement = this.renderElement.bind(this);
    }

    componentWillMount() {
        // here component will mount
        const appPath = this.props.pathname;
        const splitPath = appPath.split("/");
        const currentPath = splitPath[splitPath.length -1];
        let defaultSelectedKeys = '';
        this.state.menuItems.forEach( (key, value) => {
            if(key.has_sub_menu) {
                let childItems = key.items;
                childItems.forEach( (key, value) => {
                    if(key.target === currentPath) {
                        defaultSelectedKeys = key.id.toString();
                    }
                });
            } else if(key.target === currentPath) {
               defaultSelectedKeys = key.id.toString();
            }
        });
        this.setState({ currentPath, defaultSelectedKeys });
    }

    renderElement(elementKey, elementTitle, elementLink, elementIconClass) {
        return (
            <Menu.Item key={ elementKey }>
                <a href={ (elementLink === "_self")? "javascript:;" : elementLink } onClick={ (elementLink === "_self")? () => { console.log(elementTitle); }: "" }>
                    <Icon type={ elementIconClass } />
                    <span className="nav-text">{ elementTitle }</span>
                </a>
            </Menu.Item>
        );
    }

    renderSubMenuItem( subMenuItems ) {
        const subMenuDomObject = [];
        subMenuItems.forEach( (key, value) => {
            const elementKey = key.id;
            const elementTitle = key.title;
            const elementLink = key.target;
            const elementIconClass = key.icon_class;
            subMenuDomObject.push(

                this.renderElement(elementKey,  elementTitle, elementLink, elementIconClass)

            );
        });

        return(
            subMenuDomObject
        );
    }

    renderMenuItem() {

        const SubMenu = Menu.SubMenu;
        const domObject = [];
        const menuItems = this.state.menuItems;

        menuItems.forEach( (key, value) => {

            const hasSubMenu = key.has_sub_menu;
            const elementKey = key.id;
            const elementTitle = key.title;
            const elementLink = key.target;
            const elementIconClass = key.icon_class;

            if(hasSubMenu) {

                domObject.push(
                    <SubMenu key={ "sub"+elementKey } title={<span><Icon type={elementIconClass} /><span>{ elementTitle }</span></span>}>

                        { this.renderSubMenuItem( key.items ) }

                    </SubMenu>
                );

            } else {

                domObject.push(

                    this.renderElement(elementKey,  elementTitle, elementLink, elementIconClass)

                );

            }

        });

        return (
            domObject
        );
    }

    render() {
        const { Sider } = Layout;
        const selectedItem = this.state.defaultSelectedKeys;
        return (
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                   breakpoint="lg"
                   collapsedWidth="0"
                   onCollapse={(collapsed, type) => { console.log(collapsed, type); }} >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultOpenKeys={['sub2']} defaultSelectedKeys={[ selectedItem ]} >
                    { this.renderMenuItem() }
                </Menu>
            </Sider>
        );
    }
}

export default SidebarMenuComponent;