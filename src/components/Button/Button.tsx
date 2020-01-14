import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/button.less';

//* Custom API Props for Button
interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size'> {
	type: "primary" | "secondary" | "text";
	size?: "full" | "small" | undefined;
}

function ButtonWrapper(props: ButtonProps) {
	const { type, size } = props;
	let buttonClassType: string;
	let buttonSize: string;

	const buttonProps = buttonPropsUpdate(props);

	// classNames
	type ? buttonClassType = type : buttonClassType = "primary";

	// only secondary have buttonSize, primary and text buttons do not need it
	switch(type){
		case "secondary":
			size ? buttonSize = size : buttonSize = "full";
			break;
		default:
			buttonSize = "";
			break;
	}
	
	let buttonClass = `btn ${buttonClassType} ${buttonSize}`;

	//! add typography to button once it is made
	return(
		<Button {...buttonProps} className={buttonClass} >{props.children}</Button>
	)
};

// * function to update button props to match Ant Design
const buttonPropsUpdate = (props: ButtonProps) => {
	const { type } = props
	let buttonType: "ghost" | "link" | "default" | "primary" | "dashed" | "danger" | undefined;
	const buttonSize = undefined;

	switch(type){
		case "secondary":
			buttonType = "default";
			break;
		case "text": 
			buttonType = "link";
			break;
		default:
			buttonType = "primary";
	}

	const newProps = {
		...props,
		size: buttonSize,
		type: buttonType,
	}

	return newProps;
}

// This export will be picked up in ./index.js
export default ButtonWrapper;
