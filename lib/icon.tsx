import * as React from 'react';
import './importIcons';
import './icon.scss';
import classes from './helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, ...restProps}) => {
  return (
    <svg className={classes('mk-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
