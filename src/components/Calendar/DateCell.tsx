import React from 'react';

import './less/date.less';
import { Text } from '@components/index';

function DateCell(props:any) {
  
  return (
    <div className="date">
      <Text>{props.children}</Text>
    </div>
  )
}

export default DateCell;