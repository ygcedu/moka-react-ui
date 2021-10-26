import * as React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon';
import './icons/wechat.svg';
import './icons/alipay.svg';
import './icons/qq.svg';

ReactDom.render(
  <div>
    <Icon name="wechat"/>
    <Icon name="alipay"/>
    <Icon name="qq"/>
  </div>, document.querySelector('#root'));
