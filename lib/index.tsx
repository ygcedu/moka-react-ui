import * as React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon';

const fn = (e: React.MouseEvent<SVGElement | SVGUseElement>) => {
  console.log(e.currentTarget);
  // 强行断言（武断），消除 ts 警告
  console.log((e.target as SVGUseElement).href);
};

ReactDom.render(
  <div>
    <Icon name="wechat" onClick={fn}/>
    <Icon name="alipay" onClick={fn}/>
    <Icon name="qq" onClick={fn}/>
  </div>, document.querySelector('#root'));
