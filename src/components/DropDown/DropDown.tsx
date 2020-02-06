  
import React from 'react';
import Select, { SelectProps as AntSelectProps } from 'antd/es/select';
const { Option } = Select;

// import './less/dropdown.less';

//* Custom API Props for Button
interface OptionProps {
	icon?: JSX.Element,
	prefixValue?: string | number,
	value: string | number
}
interface DropDownProps extends Omit<AntSelectProps, 
//! these props are restricted for fig8-component dropdown
  "alloClear" | "autoClearSearchValue" | "dropdownClassName" | "className" | "dropdownRender" | "dropdownStyle" | "dropdownMenuStyle"> 
{
  type: "full" | "partial";
  placeholder?: string;
  optionList: OptionProps[];
}

function DropDown(props: DropDownProps) {
  const { size, optionList, type } = props;

  //CLASSES
  const sizeClass = size ? `-${size}` : "-large";
  const dropDownClass = type === "partial" ? `dropdown-${type}` : `dropdown-${type}${sizeClass}`;

  //UPDATE PROPS
  const newProps = dropdownPropsUpdate(props);

  const partialElement = (
    <Select 
      className={dropDownClass}
      dropdownMatchSelectWidth={false}
      {...newProps} 
      optionLabelProp="label"
    >
      {formatOptionList(optionList, type)}
    </Select>
  )

  const fullElement = (
    <Select 
      className={dropDownClass}
      dropdownMatchSelectWidth
      {...newProps} 
    >
      {formatOptionList(optionList, type)}
    </Select>
  )

  //return different JSX Element depending on type
  switch(type){
    case "partial" : 
      return partialElement;
    default :
      return fullElement;
  }
};

//* Parse pptionList to an array of Option elements
const formatOptionList = (list: OptionProps[], type: string) => {
  //TODO: may need to add more classes when we receive updated figma dimensions. Currently ONHOLD

  return list.map((item, idx) => {
    const { icon, prefixValue, value } = item;
    let label = null;
    let iconElement = icon ? <span className="label-icon">{icon}</span> : null;

    if(type === "partial"){
      label = (
        <div className="partial-label">
          {iconElement}
          {prefixValue}
        </div>
      )
    }

    return (
      <Option value={value} key={`${value}-${idx}`} label={label ? label : value}>
        {iconElement}
        {prefixValue}
        {value}
      </Option>
    )
  });
}

//* Remove unnecessary props passed down to antd Select Component
const dropdownPropsUpdate = (props: DropDownProps) => {
  const { optionList } = props;
  
  let newProps = Object.assign({}, props);
  optionList ? delete newProps.optionList : null;

  return newProps;
}

// This export will be picked up in ./index.js
export default DropDown;
