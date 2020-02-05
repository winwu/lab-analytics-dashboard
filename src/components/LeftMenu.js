import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu

class LeftMenu extends React.Component {
    render() {
        const { location, collapsed } = this.props
        return (
            <Sider className="silder-fixed" theme="light" trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    style={{ height: '100%', borderRight: 0 }}>
                    <Menu.Item key="/dashboard">
                        <NavLink to="/dashboard">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                        </NavLink>
                    </Menu.Item>
                    <SubMenu
                        key="/eeg"
                        title={
                            <span>
                                <Icon type="cloud-server" />
                                <span>EEG Data </span>
                            </span>
                        }>
                        <Menu.Item key="/eeg/users">
                            <NavLink to="/eeg/users" activeClassName="is-active">
                                By User
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="/eeg/category">
                            <NavLink to="/eeg/category" activeClassName="is-active" exact>
                                By Category
                            </NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/questionnaire"
                        title={
                            <span>
                                <Icon type="user" />
                                <span>Questionnaire</span>
                            </span>
                        }>
                        <Menu.Item key="/questionnaire/pad">
                            <NavLink to="/questionnaire/pad" activeClassName="is-active" exact>
                                PAD List
                            </NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4">
                        <Icon type="book" />
                        <span>Category Info</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(LeftMenu)
