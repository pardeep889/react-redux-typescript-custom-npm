import React, { HTMLAttributes, ReactHTMLElement } from 'react';

import './less/date.less';

interface DateCellProps extends  React.HTMLAttributes<HTMLDivElement>  {
  children?: React.ReactNode;
  day?: number;
  disabled?: boolean;
  displayOff?: boolean;
  event?: "eventOne" | "eventTwo" | undefined;
  selected?: boolean;
  discount?: boolean;
}

function DateCell(props: DateCellProps) {
  const { day, disabled, displayOff, event, selected, discount, className } = props;
  let dateDiscount = null;

  // display off: don't show dates that aren't in current month
  if(displayOff){
    return (
      <div className="date-display-off"/>
    )
  }

  // assign states to date cell, (disabled | selected | event | discount)
  let dateDisabled = disabled ? "disabled" : "";
  let dateSelected = selected ? "selected" : "";
  let dateEvent = event ? event : "";

  discount ? dateDiscount = <p className="date-discount" >%</p> : null

  let toolTip = className ? className : "";

  let newProps = Object.assign({}, props);
  className ? delete newProps.className : null;

  const dateCellClass = `date ${dateDisabled} ${dateEvent} ${dateSelected} ${toolTip}`

  return (
    <div className={dateCellClass} {...newProps}>
      <p>{day}</p>
      {dateDiscount}
    </div>
  )
}

export default DateCell;