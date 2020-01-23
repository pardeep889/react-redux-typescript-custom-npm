import React from 'react';

import './less/date.less';

interface DateCellProps {
  children?: React.ReactNode;
  day?: number;
  disabled?: boolean;
  displayOff?: boolean;
  event?: "eventOne" | "eventTwo" | undefined;
  selected?: boolean;
  discount?: boolean;
}

function DateCell(props: DateCellProps) {
  const { day, disabled, displayOff, event, selected, discount } = props;
  let dateDisabled = "";
  let dateEvent = "";
  let dateSelected = "";
  let dateDiscount = null;

  // display off: don't show dates that aren't in current month
  if(displayOff){
    return (
      <div className="date-display-off"/>
    )
  }

  // assign states to date cell, (disabled | selected | event | discount)
  disabled ? dateDisabled = "disabled" : "";
  selected ? dateSelected = "selected" : "";
  event ? dateEvent = event : "";
  discount ? dateDiscount = <p className="date-discount" >%</p> : null

  const dateCellClass = `date ${dateDisabled} ${dateEvent} ${dateSelected}`

  return (
    <div className={dateCellClass}>
      <p>{day}</p>
      {dateDiscount}
    </div>
  )
}

export default DateCell;