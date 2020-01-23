import React from 'react';
import moment from 'moment';

import './less/time-slot.less';

interface TimeSlotProps {
  time: string;
  discount?: boolean;
  tickets?: number;
  disabled?: boolean;
  selected?: boolean;
};

const TimeSlot = (props: TimeSlotProps) => {
  const { time, discount, tickets, disabled, selected } = props;
  let discountCell, ticketCell = null;
  let timeDisabled, timeSelected = "";

  disabled ? timeDisabled = "disabled" : "";
  selected ? timeSelected = "selected" : "";

  const timeSlotClass = `time-slot ${timeDisabled} ${timeSelected}`;

  tickets ? ticketCell = <p className="ticket" >{`${tickets} tickets`}</p> : null;
  discount ? discountCell = <p className="discount" >%</p> : null;

  return (
    <div className={timeSlotClass}>
      <p>{time}</p>
      {ticketCell}
      {discountCell}
    </div>
  )  
};

export default TimeSlot;