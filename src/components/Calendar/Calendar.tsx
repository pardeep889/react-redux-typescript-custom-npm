import React, {MouseEvent} from 'react';
import Calendar, {CalendarProps as AntCalendarProps } from 'antd/es/calendar';

import './less/calendar.less';

import moment, { Moment } from 'moment';
import DateCell from './DateCell';
import { Text, Button } from '@components/index';

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
  month: string;
}

class CalendarWrapper extends React.Component <CalendarProps, CalendarState>{
  constructor(props: CalendarProps){
    super(props)

    this.state = {
      disabledDates: this.setDatesToState("disable"),
      discountDates: this.setDatesToState("discount", this.props.discountDates),
      eventDates: this.setDatesToState("event", this.props.eventDates),
      month: moment().format("MMMM YYYY"),
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

    if(month !== current.format("MMMM YYYY")) return true;
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
    if(date.format("MMMM YYYY") !== month){
      return <DateCell displayOff />
    }

    //* DISABLED DATES
    const day = date.date();
    const reset = date.day() === resetDay;
    const beforeCurrentDay = date < moment().startOf('day');

    if(disabledDates && disabledDates[date.format("LL")]) return <DateCell disabled day={day} />
    if(reset || beforeCurrentDay) return <DateCell disabled day={day} />

    //* EVENT DATES
    if(eventDates && eventDates[date.format("LL")]) event = true;

    //* DISCOUNT DATES
    if(discountDates && discountDates[date.format("LL")]) discount = true;

    return <DateCell day={day} event={event} discount={discount} />
  }

  onPanelChange = (date: Moment, mode: "month" | "year" | undefined ) => {
    const { month } = this.state;
    const newMonth = date.format("MMMM YYYY");

    if(month !== newMonth){
      this.setState({
        ...this.state,
        month: newMonth,
      });
    }
    
    return
  };

  headerRender = (value: Moment, onChange: ((value: Moment) => void) | undefined ) => {
    //! replace button to arrows
    if(onChange){
      return (
        <header className="calendar-header">
          <div className="calendar-header-title">
            <Button 
              onClick={ () => {
                const newValue = value.clone();
                newValue.subtract(1, 'M');
                onChange(newValue);
              }}
              type="text"
            >prev</Button>
          <Text>{this.state.month}</Text>
            <Button 
              onClick={ () => {
                  const newValue = value.clone();
                  newValue.add(1, 'M');
                  onChange(newValue)
              }}
              type="text"
            >next</Button>
          </div>
          <div className="calendar-header-weekday">
            <Text className="weekday-text">S</Text>
            <Text className="weekday-text">M</Text>
            <Text className="weekday-text">T</Text>
            <Text className="weekday-text">W</Text>
            <Text className="weekday-text">Th</Text>
            <Text className="weekday-text">F</Text>
            <Text className="weekday-text">Sa</Text>
          </div>
        </header>
      )
    }

    return null;
  }

  render(){
    return (
      <div className="calendar">
        <Calendar 
          fullscreen={false} 
          disabledDate={this.disabledDate}
          dateFullCellRender={this.dateFullCellRender}
          onPanelChange={this.onPanelChange}
          headerRender={({ value, onChange }) => this.headerRender(value, onChange)}
        />
        <section className="calendar-legend">
          <div>
            <div />
            <Text>PINKMAS</Text>
          </div>
          <div>
            <div />
            <Text>MOIC general</Text>
          </div>
        </section>
      </div>
    )
  }
}

export default CalendarWrapper;