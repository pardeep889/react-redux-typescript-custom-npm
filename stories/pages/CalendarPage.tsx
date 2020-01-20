import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Calendar }  from '@components/index';
import DateCell from '@components/Calendar/DateCell';
import moment from 'moment';


const CalendarPage = () => {
  return (
    <div>
      <h3 className="story-title">Calendar</h3>
      <section className="m20">
        <h4 className="mb20">Date Cell</h4>
        <aside className="story-flex story-calendar">
          <div className="m20">
            <h6 className="mb20">Normal</h6>
            <DateCell day={6}/>
          </div>
          <div className="m20">
            <h6 className="mb20">Disabled</h6>
            <DateCell disabled day={6}/>
          </div>
          <div className="m20">
            <h6 className="mb20">Show</h6>
            <DateCell show day={6}/>
          </div>
          <div className="m20">
            <h6 className="mb20">Selected</h6>
            <DateCell selected day={6}/>
          </div>
          <div className="m20">
            <h6 className="mb20">Discount</h6>
            <DateCell discount day={6}/>
          </div>
        </aside>
      </section>
      <section className="m20">
        <h4 className="mb20">Calendar</h4>
        <div className="m20">
          <Calendar 
            resetDay={2} 
            soldOutDates={["2020-02-02", "2020-02-07"]} 
          />
        </div>
      </section>
    </div>
  )
};

export default CalendarPage;