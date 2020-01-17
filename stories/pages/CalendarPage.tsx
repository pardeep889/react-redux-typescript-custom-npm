import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Calendar }  from '@components/index';

const CalendarPage = () => {
  return (
    <div>
      <h3 className="story-title">Calendar</h3>
      <section className="m20">
        <h4 className="mb20">Date Picker</h4>
        <div className="m20">
          <Calendar />
        </div>
      </section>
    </div>
  )
};

export default CalendarPage;