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
        <aside className="story-flex story-background">
          <div className="m20">
            <h6 className="mb20">Normal</h6>
            <TimeSlot time="6:00 pm"/>
          </div>
          <div className="m20">
            <h6 className="mb20">Disabled</h6>
            <TimeSlot time="6:00 pm" disabled />
          </div>
          <div className="m20">
            <h6 className="mb20">Selected</h6>
            <TimeSlot time="6:00 pm" selected/>
          </div>
          <div className="m20">
            <h6 className="mb20">Discount</h6>
            <TimeSlot time="6:00 pm" discount/>
          </div>
          <div className="m20">
            <h6 className="mb20">Ticket</h6>
            <TimeSlot time="6:00 pm" tickets={5}/>
          </div>
        </aside>
      </section>
    </div>
  )
};

export default TimePickerPage;