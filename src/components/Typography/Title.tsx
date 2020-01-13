import React from 'react';

import './less/typography.less';

interface TitleProps {
  level: "h1" | "h2" | "h3" | "h4";
  disabled?: boolean | undefined;
  children?: React.ReactNode;
}

function Title(props: TitleProps) {
  const { level, disabled } = props;
  let titleDisabled = "";

  // Classes
  disabled ? titleDisabled = "disabled" : ""
  const titleClass = `title ${level} ${titleDisabled}`;

  return (
    <h1{...props} className={titleClass} >{props.children}</h1>
  )

};

export default Title;