  
import React, { useState, ReactNode } from 'react';
import Select, { SelectProps as AntSelectProps } from 'antd/es/select';
const { Option } = Select;

// import './less/dropdown.less';

//* Custom API Props for Button
interface DropDownProps extends AntSelectProps {
}

function DropDown(props: DropDownProps) {
  const { size } = props;

  const dropDownClass = `dropdown-${size ? size : "large"}`

	return(
    <Select 
      className={dropDownClass}
      dropdownMatchSelectWidth={false} 
      placeholder="select value"
    >
      <Option value="value1">Value 1</Option>
      <Option value="value2">Value 2</Option>
      <Option value="value3">Value 3</Option>
      <Option value="value4">Value 4</Option>
    </Select>
	)
};

// This export will be picked up in ./index.js
export default DropDown;
