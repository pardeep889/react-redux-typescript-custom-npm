import React from 'react';
import moment from 'moment';

import './less/time-slot.less';

interface TimeSlotProps {
  time: string;
  discount?: boolean;
  tickets?: number;
  disabled?: boolean;
};

const TimeSlot = (props: TimeSlotProps) => {
  const { time, discount, tickets } = props;
  let discountCell, ticketCell = null;


  const timeSlotClass = `time-slot`;

  tickets ? ticketCell = <p className="ticket" >{tickets}</p> : null;
  discount ? discountCell = <p className="discount" >%</p> : null;

  return (
    <div>
      {ticketCell}
      <button className={timeSlotClass} >
        <p className="time-slot-text">
          {moment(time).format("LT")}
          {ticketCell}
          {discountCell}
        </p>
      </button>
    </div>
  )  
};

export default TimeSlot;