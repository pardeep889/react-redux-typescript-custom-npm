import React from 'react';
import Input, { InputProps as AntInputProps } from 'antd/es/input';
import { Title } from '../index'

import './less/input.less';

//* Custom API Props for Input
interface AntProps extends Omit<AntInputProps, 'type' > {
	type?: "text";
	title: string;
	error?: string;
}

function InputWrapper(props: AntProps) {
	const { type, title, disabled, error } = props;
	
	let inputDisabled = false;
	let errorText = null;
	let errorClass = "";

	disabled ? inputDisabled = disabled : inputDisabled = false;
	error ? errorClass = "error" : ""

	if (error){
		errorText = <p className="error" >{error}</p>
	}

	const inputClass = `input ${type} ${errorClass}`
	
	return(
		<div>
			<Title level="h4" disabled={inputDisabled} >{ title }</Title>
			<Input {...props} className={inputClass} />
			{ errorText }
		</div>
	)
};

export default InputWrapper;