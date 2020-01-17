import React from 'react';
// import Checkbox, {  } from 'antd/es/checkbox';
import Checkbox, { CheckboxProps as AntCheckboxProps } from 'antd/es/checkbox';
import { Text } from '@components/index';

import './less/checkbox.less';

interface CheckboxProps extends AntCheckboxProps {}

function CheckboxWrapper (props: CheckboxProps){
  const { disabled } = props;
  let checkboxDisabled = "";

  disabled ? checkboxDisabled = "disabled" : checkboxDisabled = "";
  const checkboxClass = `checkbox ${checkboxDisabled}`;

  return (
    <Checkbox className={checkboxClass} {...props}>
      <Text onClick = {(e) => e.preventDefault()}>{props.children}</Text>
    </Checkbox>
  )
};

export default CheckboxWrapper;