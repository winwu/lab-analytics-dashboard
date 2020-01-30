import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';
// import logo from './logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function Dashboard() {
    return <h2>Dashboard</h2>;
}
  
function Users() {
    return <h2>Users</h2>;
}


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
              {/* <div>
                <nav>
                  <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                  </ul>
                </nav>
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path='/'>
                            <Redirect to="/dashboard" />
                        </Route>
                    </Switch>
                </div> */}
                <Layout>
                    <Header className="header">
                        <Row gutter={8}>
                            <Col xs={4} md={4}>
                                <Icon
                                    className="trigger d-inline-block"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <h1 className="brand-title d-inline-block">Lab Analytics Result</h1>
                            </Col>
                            <Col xs={20} md={20}>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">nav 1</Menu.Item>
                                    <Menu.Item key="2">nav 2</Menu.Item>
                                    <Menu.Item key="3">nav 3</Menu.Item>
                                </Menu>
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
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={<span><Icon type="cloud-server" /><span>Egg Data </span></span>}
                                >
                                    <Menu.Item key="1">
                                        <span>By User</span>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <span>By Category</span>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={<span><Icon type="user" /> <span>Questionnaire</span></span>}
                                >
                                    <Menu.Item key="3">
                                        <span>All</span>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <span>PAD Result</span>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item key="5">
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
                                }}
                            >
                                Content
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                Lab Analytics Result &copy;2020 Created by Win Wu. The UI framework is base on <a href="https://ant.design/" target="_blank">Ant Design</a>
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
export default App;
