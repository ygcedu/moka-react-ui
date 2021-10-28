import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button.example';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          Moka-UI
        </div>

      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));