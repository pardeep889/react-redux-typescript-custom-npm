import React from 'react';

import './less/typography.less';

interface TextProps {
  children?: React.ReactNode;
}

function Text(props: TextProps) {

  return (
    <p {...props} className='text' >{props.children}</p>
  )

};

export default Text;