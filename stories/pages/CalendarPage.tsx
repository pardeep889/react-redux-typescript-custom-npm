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
        <aside className="story-flex story-background">
          <div className="m20">
            <h6 className="mb20">Normal</h6>
            <DateCell day={6}/>
          </div>
          <div className="m20">
            <h6 className="mb20">Disabled</h6>
            <DateCell disabled day={6}/>
          </div>
          <div className="m20">
            <h6 className="mb20">Event One</h6>
            <DateCell event="eventOne" day={6}/>
          </div>
          <div className="m20">
            <h6 className="mb20">Event Two</h6>
            <DateCell event="eventTwo" day={6}/>
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
      <section className="m20 story-flex">
        <h4 className="mb20">Calendar</h4>
        <div className="m20">
          <Calendar 
            resetDay={2} 
            soldOutDates={["2020-02-10T00:00:00Z", "2020-02-17T00:00:00Z", "2020-02-24T00:00:00Z"]} 
            eventOneDates={["2020-02-20T00:00:00Z", "2020-02-21T00:00:00Z", "2020-02-22T00:00:00Z"]}
            eventOneLabel={"PINKMAS"}
            discountDates={["2020-02-10T00:00:00Z", "2020-02-11T00:00:00Z", "2020-02-12T00:00:00Z"]}
            closedDates={["2020-02-13T00:00:00Z", "2020-02-14T00:00:00Z"]}
            openedDates={["2020-02-12T00:00:00Z"]}
          />
        </div>
      </section>
    </div>
  )
};

export default CalendarPage;