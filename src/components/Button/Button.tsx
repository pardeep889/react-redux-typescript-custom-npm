import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/button.less';

//* Custom API Props for Button
interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size' | 'ghost'> {
	type: "primary" | "secondary" | "text";
	size?: "full" | "small" | undefined;
}

function ButtonWrapper(props: ButtonProps) {
	const { type, size } = props;

	const buttonProps = buttonPropsUpdate(props);
	const sizeClass = size ? `-${size}` : "-full";
	
	const buttonClass = `btn-${type}${sizeClass}`;

	return(
		<Button {...buttonProps} className={buttonClass}>{props.children}</Button>
	)
};

// * update button props to match Ant Design
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
