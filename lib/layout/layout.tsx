import React, {ReactElement} from 'react';
import './layout.scss';
import Aside from './aside';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('mk-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  const hasAside = 'length' in children &&
    // || 短路逻辑实现判断数组中是否包含真值
    children.reduce((result, node) => result || node.type === Aside, false);

  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
