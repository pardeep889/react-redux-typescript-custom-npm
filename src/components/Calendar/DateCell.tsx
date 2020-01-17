import React from 'react';

import './less/date.less';
import { Text } from '@components/index';

interface DateCellProps {
  children?: React.ReactNode;
  day?: number;
  disabled?: boolean;
}

function DateCell(props: DateCellProps) {
  const { day, disabled } = props;
  let dateDisabled = "";

  disabled ? dateDisabled = "disabled" : "";

  const dateCellClass = `date ${dateDisabled}`

  return (
    <div className={dateCellClass}>
      <Text>{day}</Text>
    </div>
  )
}

export default DateCell;