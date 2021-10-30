import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('mk-layout');

const Header: React.FunctionComponent = () => {
  return (
    <div className={sc('header')}>Header</div>
  );
};

export default Header;