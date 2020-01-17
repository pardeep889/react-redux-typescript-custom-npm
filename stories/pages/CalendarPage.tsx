import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Calendar }  from '@components/index';
import DateCell from '@components/Calendar/DateCell';


const CalendarPage = () => {
  return (
    <div>
      <h3 className="story-title">Calendar</h3>
      <section className="m20">
        <h4 className="mb20">Date Cell</h4>
        <div className="m20">
          <DateCell day={6}/>
        </div>
        <div className="m20">
          <DateCell disabled day={6}/>
        </div>
      </section>
      <section className="m20">
        <h4 className="mb20">Calendar</h4>
        <div className="m20">
          <Calendar resetDay={2} soldOutDates={["2020-02-02", "2020-02-07"]} />
        </div>
      </section>
    </div>
  )
};

export default CalendarPage;