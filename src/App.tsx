import React, {useState} from 'react';
import {BrowserRouter, Link, Prompt, Switch, Route, Router, useHistory, Redirect} from 'react-router-dom';
import {Layout, Menu, Button, Modal} from 'antd';
import type { MenuProps } from 'antd';
import './App.css';
import Home from './Home';
import Sub from './Sub';
const {Header, Content, Footer} = Layout;

const constomConfirm = (message: string, callback: (ok: boolean) => void) => {
  Modal.confirm({
    content: message || '',
    onOk(){callback(true)},
    onCancel() {callback(false)}
  });
};

const menuArr = [
  {key: '/home', label: '首页'},
  {key: '/sub', label: '管理'}
];

const MenuNav = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('/home');
  const onClickMenu: MenuProps['onClick'] = (item) => {
    if(activeTab !== item.key) {
      history.push(item.key);
      setActiveTab(item.key);
    }
  };
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[activeTab]}
      items={menuArr}
      onClick={onClickMenu}
    />
  );
};

const App = () => {
  return (
      <BrowserRouter getUserConfirmation={constomConfirm}>
          <Layout style={{height: '100vh'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <MenuNav />
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
                <Switch>
                  <Route path='/home' exact component={Home}></Route>
                  <Route path='/sub' component={Sub}></Route>
                  <Redirect to='/home'></Redirect>
                </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
