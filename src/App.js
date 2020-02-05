import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown } from 'antd'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'

import routes from './routes';
import LeftMenu from './components/LeftMenu'

import 'antd/dist/antd.css'
import './App.css'
// import logo from './logo.svg';

const { Header, Content, Footer } = Layout

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">Setting</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="#">Preference</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

class App extends React.Component {
    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header header-fixed">
                        <Row gutter={8}>
                            <Col xs={6} md={5}>
                                <Icon
                                    className="trigger d-inline-block"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <NavLink to="/dashboard" exact className="brand-title d-inline-block">
                                    Lab Analytics Result
                                </NavLink>
                            </Col>
                            <Col xs={18} md={19}>
                                <Row type="flex" justify="end">
                                    <Col>
                                        <Menu
                                            theme="dark"
                                            mode="horizontal"
                                            // defaultSelectedKeys={['2']}
                                            style={{ lineHeight: '64px' }}>
                                            <Menu.Item key="1">nav 1</Menu.Item>
                                            <Menu.Item key="2">nav 2</Menu.Item>
                                            <Menu.Item key="3">
                                                <Dropdown overlay={menu} trigger={['click']}>
                                                    <a className="ant-dropdown-link" href="#">
                                                    Win Wu <Icon type="down" />
                                                    </a>
                                                </Dropdown>
                                            </Menu.Item>
                                            <Menu.Item key="4">
                                                <Icon type="logout" />
                                                Logout
                                            </Menu.Item>
                                        </Menu>
                                        
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Header>
                    <Layout className="main-layout">
                        <LeftMenu collapsed={this.state.collapsed} />
                        <Layout className="layout-wrapper-adjust">
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="layout-content"
                                style={{
                                    
                                }}>
                                <Switch>
                                    { routes.map((route, i) => {
                                        const { path, exact, routes } = route;
                                        return <Route
                                            key={i}
                                            path={path}
                                            exact={exact}
                                            render={(routeProps) => (
                                                <route.component routes={routes} {...routeProps} />
                                            )}/>;
                                    })}
                                    <Route path="/">
                                        <Redirect to="/dashboard" />
                                    </Route>
                                </Switch>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                Lab Analytics Result &copy;2020 Created by Win Wu. The UI framework is base on{' '}
                                <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">
                                    Ant Design
                                </a>
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}
export default App
