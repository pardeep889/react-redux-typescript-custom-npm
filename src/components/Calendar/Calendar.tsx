// import from libraries
import React from 'react';
import Calendar, {CalendarProps as AntCalendarProps } from 'antd/es/calendar';
import moment, { Moment } from 'moment';

// styling
import './less/calendar.less';

// import from fig8-components
import DateCell from './DateCell';
import { Text } from '@components/index';

// import from svg
import Arrow from '@icon/Arrow';

interface CalendarProps extends AntCalendarProps {
  //* disabled dates
  soldOutDates?: string[];
  closedDates?: string[];
  resetDay: 0 | 1 | 2 | 3 | 4 | 5 | 6 ;

  //* open dates
  openedDates? : string[];

  //* discount
  discountDates?: string[];

  //* events
  eventOneDates?: string[];
  eventOneLabel?: string;

  eventTwoDates?: string[];
  eventTwoLabel?: string;
}

interface CalendarState {
  disabledDates: {[key: string]: boolean};
  discountDates: {[key: string]: boolean};
  eventOneDates: {[key: string]: boolean};
  eventTwoDates: {[key: string]: boolean};
  openedDates: {[key: string]: boolean};
  month: string;
  selected: string;
}          

class CalendarWrapper extends React.Component <CalendarProps, CalendarState>{
  constructor(props: CalendarProps){
    super(props)

    this.state = {
      // disabled dates to be key value pairs {"January 01, 2020": "closed"}
      disabledDates: this.setDatesToState("disable"),

      // other dates to be key value pairs {"January 01, 2020": true}

      discountDates: this.setDatesToState("discount", this.props.discountDates),
      eventOneDates: this.setDatesToState("event", this.props.eventOneDates),
      eventTwoDates: this.setDatesToState("event", this.props.eventTwoDates),
      openedDates: this.setDatesToState("open", this.props.openedDates),

      // current month & year on calendar
      month: moment().format("MMMM YYYY"),
      selected: moment().format("LL"),
    }
  }

  setDatesToState = (type: "disable" | "event" | "discount" | "open" , dates?: string[]) => {
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
    const { disabledDates, openedDates, month } = this.state;

    const formattedDate = current.format("LL");
    const reset = current.day() === resetDay;
    const beforeCurrentDay = current < moment().startOf('day');
    const notCurrentMonth = month !== current.format("MMMM YYYY");
    const disabled = disabledDates && disabledDates[formattedDate];

    if(beforeCurrentDay || notCurrentMonth || disabled) return true;
    if(openedDates && openedDates[formattedDate]) return false;

    //reset is last if conditions above passes
    if(reset) return true;

    return false;
  };

  dateFullCellRender = (date: Moment) => {
    const { resetDay } = this.props;
    const { disabledDates, eventOneDates, eventTwoDates, discountDates, openedDates, month, selected } = this.state;

    let discount = false;
    let event: "eventOne" | "eventTwo" | undefined;
    
    // turn off all dates not in current month shown
    const notCurrentMonth = month !== date.format("MMMM YYYY");
    if(notCurrentMonth) return <DateCell displayOff />

    // disabled / event / discount / opened
    const day = date.date();

    const reset = date.day() === resetDay;

    const beforeCurrentDay = date < moment().startOf('day');
    const formattedDate = date.format("LL");
    const disabled = disabledDates && disabledDates[formattedDate];
    const opened = openedDates && openedDates[formattedDate];

    //* DISABLED DATES
    if(beforeCurrentDay || disabled) return <DateCell disabled day={day} />;

    //* EVENT/DISCOUNT DATES
    if(eventOneDates && eventOneDates[formattedDate]) event = 'eventOne';
    if(eventTwoDates && eventTwoDates[formattedDate]) event = 'eventTwo';
    if(discountDates && discountDates[formattedDate]) discount = true;
    
    //* SELECTED
    if(selected === formattedDate) return <DateCell selected day={day} discount={discount} />;

    //* OPENED DATES
    if(opened) return <DateCell day={day} event={event} discount={discount} />;
    
    //* RESET DATES
    if(reset || beforeCurrentDay) return <DateCell disabled day={day} />;



    //* default return
    return <DateCell day={day} event={event} discount={discount} />;
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
    if(onChange){
      return (
        <header className="calendar-header">
          <div className="calendar-header-title">
            <div 
              onClick={ () => {
                const newValue = value.clone();
                newValue.subtract(1, 'M');
                onChange(newValue);
              }}
            >
              <Arrow type="left"/>
            </div>
          <Text>{this.state.month}</Text>
            <div 
              onClick={ () => {
                  const newValue = value.clone();
                  newValue.add(1, 'M');
                  onChange(newValue)
              }}
            >
              <Arrow type="right"/>
            </div>
          </div>
          <div className="calendar-header-weekday">
            <Text className="weekday-text secondary-text">S</Text>
            <Text className="weekday-text secondary-text">M</Text>
            <Text className="weekday-text secondary-text">T</Text>
            <Text className="weekday-text secondary-text">W</Text>
            <Text className="weekday-text secondary-text">Th</Text>
            <Text className="weekday-text secondary-text">F</Text>
            <Text className="weekday-text secondary-text">Sa</Text>
          </div>
        </header>
      )
    }

    return null;
  }

  onSelect = (date: Moment) => {
    const formattedDate = date.format("LL");
    this.setState({
      ...this.state,
      selected: formattedDate,
    })
  }

  render(){
    const { eventOneDates, eventTwoDates } = this.state;
    const { eventOneLabel, eventTwoLabel } = this.props;
    let eventOne, eventTwo = null;
    
    if(eventOneLabel){
      eventOne = (
        <div className="legend-key">
          <div className="legend-icon event-one" />
          <Text className="legend-text secondary-text">{eventOneLabel}</Text>
        </div>
      )
    }

    if(eventTwoLabel){
      eventTwo = (
        <div className="legend-key">
          <div className="legend-icon event-two" />
          <Text className="legend-text secondary-text">{eventTwoLabel}</Text>
        </div>
      )
    }
    return (
      <div className="calendar">
        <Calendar 
          fullscreen={false} 
          disabledDate={this.disabledDate}
          dateFullCellRender={this.dateFullCellRender}
          onPanelChange={this.onPanelChange}
          headerRender={({ value, onChange }) => this.headerRender(value, onChange)}
          onSelect={this.onSelect}
        />
        <section className="calendar-legend">
          {eventOne}
          {eventTwo}
          <div className="legend-key">
            <div className="legend-icon general"/>
            <Text className="legend-text secondary-text" >MOIC general</Text>
          </div>
        </section>
      </div>
    )
  }
}

export default CalendarWrapper;