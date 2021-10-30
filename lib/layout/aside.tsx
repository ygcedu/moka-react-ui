import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('mk-layout');
const Aside: React.FunctionComponent = () => {
  return (
    <div className={sc('aside')}></div>
  );
};

export default Aside;
