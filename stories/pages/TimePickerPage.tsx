import React from 'react';

//COMPONENT
import { TimePicker } from '@components/index';

const TimePickerPage = () => {
  return (
    <div>
      <h3 className="story-title">Time Picker</h3>
      <section>
        <h4 className="story-title">Types</h4>
        <div className="m20">
          <TimePicker />
        </div>
      </section>
    </div>
  )
};

export default TimePickerPage;