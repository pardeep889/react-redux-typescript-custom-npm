import React from 'react';
import Calendar, {CalendarProps as AntCalendarProps} from 'antd/es/calendar';

import './less/calendar.less';

interface CalendarProps extends AntCalendarProps {

}

function CalendarWrapper(props: CalendarProps) {

  return (
    <div className="calendar">
      <Calendar fullscreen={false} />
    </div>
  )

};

export default CalendarWrapper;