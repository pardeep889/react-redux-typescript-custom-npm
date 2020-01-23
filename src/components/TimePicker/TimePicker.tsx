import React from 'react';
import TimePicker, {TimePickerProps as AntTimeProps} from 'antd/es/time-picker';

import './less/time-picker.less';

interface TimeProps extends AntTimeProps{

}

function TimePickerWrapper(props: TimeProps) {


  return (
    <div>
      <TimePicker/>
    </div>
  )

};

export default TimePickerWrapper;