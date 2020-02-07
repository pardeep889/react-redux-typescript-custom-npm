import React from 'react';
import Input, { InputProps as AntInputProps } from 'antd/es/input';

import { Title, DropDown } from '@components/index'

import './less/input.less';

//* Custom API Props for Input
interface ValueProps {
	icon?: JSX.Element,
	prefixValue?: string | number,
	value: string | number
}
interface InputProps extends Omit<AntInputProps, 'type' > {
	type?: "text" | "dropdown";
	dropDownOptions?: {
		defaultValue: string | number;
		optionList: ValueProps[];
	}
	error?: string;
	title: string;
}

function InputWrapper(props: InputProps) {
	const { type, title, disabled, error, dropDownOptions } = props;
	const InputGroup = Input.Group;
	
	// ERRORS
	let errorText = error ? <p className="error-message" >{error}</p> : null;
	let errorClass = error ? "-error" : "";
	let disabledClass = disabled ? "-disabled" : ""

	// CLASSNAME
	const inputClass = `input-${type ? type : "text"}${disabledClass} ${errorClass}`;

	// UPDATE PROPS
	const newProps = inputPropsUpdate(props);

	// INPUT FIELD (DEFAULT)
	let inputField = <Input {...newProps} className={inputClass} />;


	// IF (DROPDOWN)
	if(type === "dropdown" && dropDownOptions){
		const { defaultValue, optionList } = dropDownOptions;

		inputField = (
			<InputGroup className={inputClass} >
				<div className="input-dropdown-group">
					<DropDown type="partial" optionList={optionList} defaultValue={defaultValue} disabled={disabled}/>
					<Input {...newProps}/>
				</div>
			</InputGroup>
		)
	};

	return (
		<div>
			<Title level="h7" disabled={disabled} >{ title }</Title>
			{ inputField }
			{ errorText }
		</div>
	)
	
};

//* Remove unecessary props for antd
const inputPropsUpdate = (props: InputProps) => {
  const { dropDownOptions, title, error, type } = props;
	let newProps = Object.assign({}, props);
	
	dropDownOptions ? delete newProps.dropDownOptions : null;
	title ? delete newProps.title : null;
	error ? delete newProps.error : null;
	
	if(type === "dropdown"){
		newProps.type = "text";
	}

  return newProps;
}

export default InputWrapper;