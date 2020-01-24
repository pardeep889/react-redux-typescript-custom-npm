import React from 'react';
import moment from 'moment';

import './less/time-picker.less';
import './TimeSlot';
import TimeSlot from './TimeSlot';

//! timeslots to be radios? see antd radio buttons

interface TimeProps{
  ticketsAvailable: {[key: string]: number};
  lowTicketThreshold: number;
  discountTimes?: string[];
}

interface TimeState {
  disabledTimes?: {[key: string]: boolean};
  discountTimes?: {[key: string]: boolean};
  selected?: string;
}  

class TimePickerWrapper extends React.Component <TimeProps & React.HTMLProps<HTMLDivElement>, TimeState>{
  constructor(props: TimeProps & React.HTMLProps<HTMLDivElement>){
    super(props);

    this.state = {
    }
  }

  renderTimeSlot = () => {
    const { ticketsAvailable, lowTicketThreshold } = this.props;
    const ticketArr = Object.keys(ticketsAvailable);

    const timeSlot = ticketArr.map(timeSlot => {
      const time = moment(timeSlot).format("hh:mm A");
      const tickets = ticketsAvailable[timeSlot];

      if(tickets === 0) return <TimeSlot time={time} disabled key={timeSlot}/> ;
      if(tickets <= lowTicketThreshold) return <TimeSlot time={time} tickets={tickets} key={timeSlot}/>;

      return <TimeSlot time={time} key={timeSlot}/>;
    });

    return timeSlot;
  }

  render(){
    return (
      <div className="time-picker-container">
        <div className="time-picker">
          {this.renderTimeSlot()}
        </div>
        <div className="time-picker-blur" />
      </div>
    )
  }
};

export default TimePickerWrapper;