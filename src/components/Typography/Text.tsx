import React from 'react';

import './less/typography.less';

interface TextProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

function Text(props: TextProps) {
  const { className } = props;
  let propsClass = "";

  className ? propsClass = className : "";

  return (
    <p {...props} className={`text ${className}`} >{props.children}</p>
  )

};

export default Text;