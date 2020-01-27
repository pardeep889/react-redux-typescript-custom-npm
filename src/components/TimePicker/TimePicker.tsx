import React from 'react';
import Radio, { RadioProps as AntRadioProps } from 'antd/es/radio'
import moment from 'moment';

import './less/time-picker.less';
import './TimeSlot';
import TimeSlot from './TimeSlot';

//! timeslots to be radios? see antd radio buttons

interface TimeProps extends AntRadioProps {
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
      let tickets: number | undefined = ticketsAvailable[timeSlot];
      let disabled = false;

      if(tickets === 0) disabled = true;
      if(tickets > lowTicketThreshold) tickets = undefined;

      return <TimeSlot 
        time={time} 
        key={timeSlot} 
        disabled={disabled} 
        value={timeSlot}
        tickets={tickets}
      />;
    });

    return timeSlot;
  }

  radioPropsUpdate = () => {
    let newRadioProps: any = Object.assign({}, this.props);

    delete newRadioProps.ticketsAvailable;
    delete newRadioProps.lowTicketThreshold;

    return newRadioProps;
  }

  render(){
    const radioButtons = this.radioPropsUpdate();

    return (
      <Radio.Group className="time-picker-container" {...radioButtons}>
        <div className="time-picker">
          {this.renderTimeSlot()}
        </div>
        <div className="time-picker-blur" />
      </Radio.Group>
    )
  }
};

export default TimePickerWrapper;