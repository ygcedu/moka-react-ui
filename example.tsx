import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button.example';
import LayoutExample from './lib/layout/layout.example';
import {Aside, Content, Footer, Header, Layout} from './lib/layout/layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';

const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48" height="48" alt=""/>
          <span>Moka-UI</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        <a href="http://beian.miit.gov.cn/">沪ICP备2021016458号</a>
        <span>&copy; 2021 袁广超.</span>
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
