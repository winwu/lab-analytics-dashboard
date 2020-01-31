import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Dashboard from './pages/dashboard';
import EegUsers from './pages/eeg/users';
import EegCategory from './pages/eeg/category';

import 'antd/dist/antd.css';
import './App.css';
// import logo from './logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


class App extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        <Row gutter={8}>
                            <Col xs={6} md={5}>
                                <Icon
                                    className="trigger d-inline-block"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <Link to="/dashboard" className="brand-title d-inline-block">Lab Analytics Result</Link>
                            </Col>
                            <Col xs={18} md={19}>
                                <Row type="flex" justify="end">
                                    <Col>
                                        <Menu
                                            theme="dark"
                                            mode="horizontal"
                                            defaultSelectedKeys={['2']}
                                            style={{ lineHeight: '64px' }}>
                                            <Menu.Item key="1">nav 1</Menu.Item>
                                            <Menu.Item key="2">nav 2</Menu.Item>
                                            <Menu.Item key="3">nav 3</Menu.Item>
                                            <Menu.Item key="4"><Icon type="logout" />Logout</Menu.Item>
                                        </Menu>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Header>
                    <Layout className="main-layout">
                        <Sider
                            trigger={null} 
                            collapsible
                            collapsed={this.state.collapsed}
                            width={200}
                            >
                            <Menu
                                theme="light"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}>
                                <SubMenu
                                    key="sub1"
                                    title={<span><Icon type="cloud-server" /><span>EEG Data </span></span>}>
                                    <Menu.Item key="1">
                                        <Link to="/eeg/users">By User</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/eeg/category">By Category</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={<span><Icon type="user" /> <span>Questionnaire</span></span>}>
                                    <Menu.Item key="3">
                                        <span>PAD List</span>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item key="4">
                                    <Icon type="book" /><span>Category Info</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}>
                                <Switch>
                                    <Route path="/dashboard">
                                        <Dashboard />
                                    </Route>
                                    <Route path="/eeg/users">
                                        <EegUsers />
                                    </Route>
                                    <Route path="/eeg/category">
                                        <EegCategory />
                                    </Route>
                                    <Route path='/'>
                                        <Redirect to="/dashboard" />
                                    </Route>
                                </Switch>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                Lab Analytics Result &copy;2020 Created by Win Wu. The UI framework is base on <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">Ant Design</a>
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
export default App;
