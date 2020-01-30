import React from 'react';

import './less/title.less';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h6" | "h7";
  disabled?: boolean | undefined;
  color?: "default" | "cherry";
}

function Title(props: TitleProps) {
  const { level, disabled, color } = props;

  // Classes
  const titleDisabled = disabled ? "-disabled" : "";
  const titleColor = color==="cherry" ? "title-color" : "";
  const titleClass = disabled ? `title-${level}${titleDisabled}` : `title-${level} ${titleColor}`;

  return (
    <h1{...props} className={titleClass} >{props.children}</h1>
  )

};

export default Title;