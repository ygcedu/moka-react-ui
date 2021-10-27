import * as React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
  name: string;
  // onClick: React.MouseEventHandler<SVGElement>
  onClick: (e: React.MouseEvent) => void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="mk-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
