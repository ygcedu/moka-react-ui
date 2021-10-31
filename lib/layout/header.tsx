import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('mk-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Header: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;

  return (
    <div className={sc('header', {extra: className})} {...rest}>
      Header
    </div>
  );
};

export default Header;
