import React from 'react';
import Calendar, {CalendarProps as AntCalendarProps} from 'antd/es/calendar';

import './less/calendar.less';

import moment, { Moment } from 'moment';
import DateCell from './DateCell';

interface CalendarProps extends AntCalendarProps {
  soldOutDates?: string[];
  closedDates?: string[];
  resetDay: 0 | 1 | 2 | 3 | 4 | 5 | 6 ;
}

function CalendarWrapper(props: CalendarProps) {
  const { resetDay, soldOutDates, closedDates } = props;

  const disabledDate = (current: Moment) => {
    // current = date shown on calendar

    const reset = current.day() === resetDay;
    const beforeCurrentDay = current < moment().startOf('day');

    // check if date if before today's date
    if (beforeCurrentDay) return true;

    // check if it is a reset date, ex: is the date a tuesday? 
    if (reset) return true;

    // check if date is sold out. 
    if (soldOutDates) {
      const soldOut = !!soldOutDates.find(d => matchedDate(current, d));
      if(soldOut) return true;
    };

    // check if date is closed. 
    if (closedDates) {
      const closed = !!closedDates.find(d => matchedDate(current, d));
      if(closed) return true;
    }

    return false;
  };

  return (
    <div className="calendar">
      <Calendar 
        fullscreen={false} 
        disabledDate={disabledDate}
        dateCellRender={dateCellRender}
      />
    </div>
  )

};

const dateCellRender = (date: Moment) => {
  const day = date.date();
  return <DateCell day={day}/>
};

const matchedDate = (current: Moment, date: string) => {
  return current.format("LL") === moment(date).format("LL");
};

export default CalendarWrapper;