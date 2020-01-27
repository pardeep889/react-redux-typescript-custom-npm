import React from 'react';
import Radio, { RadioProps as AntRadioProps } from 'antd/es/radio'

import './less/time-slot.less';
import { relativeTimeThreshold } from 'moment';

interface TimeSlotProps extends AntRadioProps {
  time: string;
  tickets?: number;
  disabled?: boolean;
};

const TimeSlot = (props: TimeSlotProps) => {
  const { time, tickets} = props;
  let discountCell, ticketCell = null;

  const timeSlotClass = `time-slot`;

  tickets ? ticketCell = <p className="ticket" >{`${tickets} tickets`}</p> : null;

  return (
    <Radio.Button className={timeSlotClass} {...props}>
      {time}
      {ticketCell}
      {discountCell}
    </Radio.Button>
  )  
};

export default TimeSlot;