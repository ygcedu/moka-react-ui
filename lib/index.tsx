import * as React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDom.render(
  <div>
    <Icon name="wechat" onClick={fn}/>
    <Icon name="alipay"
          onMouseEnter={() => console.log('enter')}
          onMouseLeave={() => console.log('leave')}/>
    <Icon name="qq" onClick={fn}/>
  </div>, document.querySelector('#root'));
