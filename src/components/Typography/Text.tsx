import React from 'react';

import './less/text.less';

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: "main" | "bold" | "small";
}

function Text(props: TextProps) {
  const { className, type } = props;

  const textType = type ? type : "main";

  const textClass = `text-${textType}`;

  return (
    <p {...props} className={`${textClass} ${className}`} >{props.children}</p>
  )

};

export default Text;