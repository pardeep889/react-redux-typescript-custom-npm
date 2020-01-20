import React from 'react';
import Calendar, {CalendarProps as AntCalendarProps} from 'antd/es/calendar';

import './less/calendar.less';

import moment, { Moment } from 'moment';
import DateCell from './DateCell';

interface CalendarProps extends AntCalendarProps {
  //* disabled dates
  soldOutDates?: string[];
  closedDates?: string[];
  resetDay: 0 | 1 | 2 | 3 | 4 | 5 | 6 ;

  //* events/discount
  discountDates?: string[];
  eventDates?: string[];
}

interface CalendarState {
  disabledDates: {[key: string]: string };
  discountDates: {[key: string]: boolean};
  eventDates: {[key: string]: boolean};
  month: number;
}

class CalendarWrapper extends React.Component <CalendarProps, CalendarState>{
  constructor(props: CalendarProps){
    super(props)

    this.state = {
      disabledDates: this.setDatesToState("disable"),
      discountDates: this.setDatesToState("discount", this.props.discountDates),
      eventDates: this.setDatesToState("event", this.props.eventDates),
      month: moment().month(),
    }
  }

  setDatesToState = (type: "disable" | "event" | "discount", dates?: string[]) => {
    if(type === "disable"){
      const { closedDates, soldOutDates } = this.props;
      const allDates: string[] = [];
      let disabledDates = {};
  
      closedDates ? allDates.push(...closedDates) : null ;
      soldOutDates ? allDates.push(...soldOutDates) : null ;
  
      allDates.forEach(date => {
        const formattedDate = moment(date).format("LL");
        disabledDates[formattedDate] = "closed";
      });
  
      return disabledDates;
    }

    let dateObj = {};

    dates?.forEach(date => {
      const formattedDate = moment(date).format("LL");
      dateObj[formattedDate] = true;
    })

    return dateObj;
  };

  disabledDate = (current: Moment) => {
    const { resetDay } = this.props;
    const { disabledDates, month } = this.state;

    const reset = current.day() === resetDay;
    const beforeCurrentDay = current < moment().startOf('day');
    const formatedDate = current.format("LL");

    if(month !== current.month()) return true;
    if(disabledDates && disabledDates[formatedDate]){
      if (disabledDates[formatedDate] === "closed") return true;
      else return false;
    }
    if(reset || beforeCurrentDay) return true;

    return false;
  };

  dateFullCellRender = (date: Moment) => {
    const { resetDay } = this.props;
    const { disabledDates, eventDates, discountDates, month } = this.state;

    let disable, event, discount = false;

    // turn off all dates not in current month shown
    if(date.month() !== month){
      return <DateCell displayOff />
    }

    //* DISABLED DATES
    const day = date.date();
    const reset = date.day() === resetDay;
    const beforeCurrentDay = date < moment().startOf('day');

    if(disabledDates && disabledDates[date.format("LL")]) return <DateCell disabled day={day} />
    if(reset || beforeCurrentDay) return <DateCell disabled day={day} />

    //* EVENT DATES
    if(eventDates && eventDates[date.format("LL")]) return <DateCell event day={day} />

    //* DISCOUNT DATES
    if(discountDates && discountDates[date.format("LL")]) return <DateCell discount day={day} />

    return <DateCell day={day} />
  }

  onPanelChange = (date: Moment, mode: "month" | "year" | undefined ) => {
    const { month } = this.state;
    const newMonth = date.month();

    if(month !== newMonth){
      this.setState({
        ...this.state,
        month: newMonth,
      });
    }
    
    return
  };

  render(){
    return (
      <div className="calendar">
        <Calendar 
          fullscreen={false} 
          disabledDate={this.disabledDate}
          dateFullCellRender={this.dateFullCellRender}
          onPanelChange={this.onPanelChange}
        />
      </div>
    )
  }
}

export default CalendarWrapper;