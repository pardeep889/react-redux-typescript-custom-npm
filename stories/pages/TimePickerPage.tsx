import React from 'react';
import { action } from '@storybook/addon-actions';

//COMPONENT
import { TimePicker } from '@components/index';
import TimeSlot from '@components/TimePicker/TimeSlot';

class TimePickerPage extends React.Component <any, any> {
  constructor(props: any){
    super(props)

    this.state = {
      ticketsAvailable:  {
        "2020-02-10T14:00:00Z": 25, 
        "2020-02-10T14:30:00Z": 10, 
        "2020-02-10T15:00:00Z": 3,
        "2020-02-10T15:30:00Z": 0,
        "2020-02-10T16:00:00Z": 15, 
        "2020-02-10T16:30:00Z": 10, 
        "2020-02-10T17:00:00Z": 1,
        "2020-02-10T17:30:00Z": 0,
        "2020-02-10T18:00:00Z": 25, 
        "2020-02-10T18:30:00Z": 10, 
        "2020-02-10T19:00:00Z": 3,
        "2020-02-10T19:30:00Z": 0,
        "2020-02-10T20:00:00Z": 25, 
        "2020-02-10T20:30:00Z": 0, 
        "2020-02-10T21:00:00Z": 0,
        "2020-02-10T21:30:00Z": 0,
        "2020-02-10T22:00:00Z": 25, 
        "2020-02-10T22:30:00Z": 10, 
        "2020-02-10T23:00:00Z": 5,
        "2020-02-10T23:30:00Z": 0,
        "2020-02-10T00:00:00Z": 25, 
        "2020-02-11T00:30:00Z": 10, 
        "2020-02-11T01:00:00Z": 5,
        "2020-02-11T01:30:00Z": 1
      },
      checked: "",
    }
  }

  onChange = (e: any) => {
    this.setState({
      ...this.state,
      checked: e.target.value,
    })

    action(`${e.target.value} selected`);
  }

  render(){
    return (
      <div>
        <h3 className="story-title">Time Picker</h3>
        <section>
          <h4 className="story-title">Time Slot</h4>
          <aside className="story-flex story-background m20">
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
              <TimeSlot time="6:00 pm" checked />
            </div>
            <div className="m20">
              <h6 className="mb20">Ticket</h6>
              <TimeSlot time="6:00 pm" tickets={5}/>
            </div>
          </aside>
        </section>
        <section>
          <h4 className="story-title">Time Picker</h4>
          <main className="m20">
            <TimePicker 
              ticketsAvailable={this.state.ticketsAvailable}
              lowTicketThreshold={5}
              value={this.state.checked}
              onChange={this.onChange}
            />
          </main>
        </section>
      </div>
    )
  }
};

export default TimePickerPage;