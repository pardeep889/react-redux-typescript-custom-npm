import React from 'react';

//COMPONENT
// import { TimePicker } from '@components/index';
import TimeSlot from '@components/TimePicker/TimeSlot';

const TimePickerPage = () => {

  return (
    <div>
      <h3 className="story-title">Time Picker</h3>
      <section>
        <h4 className="story-title">Time Slot</h4>
        <div className="m20">
          <TimeSlot time="2020-02-15T00:00:00Z" disabled />
        </div>
        <div className="m20">
          <TimeSlot time="2020-02-15T00:00:00Z" />
        </div>
        <div className="m20">
          <TimeSlot time="2020-02-15T00:00:00Z" discount/>
        </div>
      </section>
    </div>
  )
};

export default TimePickerPage;