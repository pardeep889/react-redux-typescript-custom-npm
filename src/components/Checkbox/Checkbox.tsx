import React from 'react';
// import Checkbox, {  } from 'antd/es/checkbox';
import Checkbox, { CheckboxProps as AntCheckboxProps } from 'antd/es/checkbox';
// import { Text } from '../index';

import './less/checkbox.less';

interface CheckboxProps extends AntCheckboxProps {}

function CheckboxWrapper (props: CheckboxProps){
  
  const checkboxClass = `checkbox`

  return (
    <Checkbox className={checkboxClass} {...props}>
      {props.children}
    </Checkbox>
  )
};

export default CheckboxWrapper;