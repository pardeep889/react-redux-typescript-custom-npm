import React from 'react';
import Calendar, {CalendarProps as AntCalendarProps} from 'antd/es/calendar';

import './less/calendar.less';

import moment, { Moment } from 'moment';
import DateCell from './DateCell';

interface CalendarProps extends AntCalendarProps {
  soldOutDates?: string[];
  closedDates?: string[];
  resetDay: 0 | 1 | 2 | 3 | 4 | 5 | 6 ;
}

interface CalendarState {
  disabledDates: {[key: string]: string };
  month: number;
}

class CalendarWrapper extends React.Component <CalendarProps, CalendarState>{
  constructor(props: CalendarProps){
    super(props)

    this.state = {
      disabledDates: this.setDisabledDates(),
      month: moment().month(),
    }
  }

  setDisabledDates = () => {
    //! may need to come back to this in the future to add manually changed closed vs opened dates.
    const { closedDates, soldOutDates } = this.props;
    const allDates: string[] = [];
    let disabledDates = {};

    closedDates ? allDates.push(...closedDates) : null ;
    soldOutDates ? allDates.push(...soldOutDates) : null ;

    allDates.forEach(date => {
      const formatedDate = moment(date).format("LL");
      disabledDates[formatedDate] = "closed";
    });

    return disabledDates;
  };

  disabledDate = (current: Moment) => {
    const { resetDay } = this.props;
    const { disabledDates } = this.state;

    const reset = current.day() === resetDay;
    const beforeCurrentDay = current < moment().startOf('day');
    const formatedDate = current.format("LL");

    if(beforeCurrentDay) return true;
    if(disabledDates[formatedDate]){
      if (disabledDates[formatedDate] === "closed") return true;
      else return false;
    }
    if(reset) return true;

    return false;
  };

  dateCellRender = (date: Moment) => {
    const { resetDay } = this.props;
    const { disabledDates, month } = this.state;

    if(date.month() !== month){
      return <DateCell display={false} />
    }

    const day = date.date();
    const reset = date.day() === resetDay;
    const beforeCurrentDay = date < moment().startOf('day');

    return <DateCell day={day}/>
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
          dateCellRender={this.dateCellRender}
          onPanelChange={this.onPanelChange}
        />
      </div>
    )
  }
}

export default CalendarWrapper;