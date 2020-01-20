import React from 'react';

import './less/date.less';

interface DateCellProps {
  children?: React.ReactNode;
  day?: number;
  disabled?: boolean;
  displayOff?: boolean;
  show?: boolean;
  selected?: boolean;
  discount?: boolean;
}

function DateCell(props: DateCellProps) {
  const { day, disabled, displayOff, show, selected, discount } = props;
  let dateDisabled = "";
  let dateShow = "";
  let dateSelected = "";
  let dateDiscount = null;

  if(displayOff){
    return (
      <div className="date-display-off"/>
    )
  }

  disabled ? dateDisabled = "disabled" : "";
  show ? dateShow = "show" : "";
  selected ? dateSelected = "selected" : "";
  discount ? dateDiscount = <p className="date-discount" >%</p> : null

  const dateCellClass = `date ${dateDisabled} ${dateShow} ${dateSelected}`

  return (
    <div className={dateCellClass}>
      <p>{day}</p>
      {dateDiscount}
    </div>
  )
}

export default DateCell;