import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/button.less';

//* Custom API Props for Button
interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size' | 'ghost' | 'icon'> {
	type: "primary" | "secondary" | "text" | "icon";
	size?: "full" | "small" | undefined;
	icon?: JSX.Element;
}

function ButtonWrapper(props: ButtonProps) {
	const { type, size, icon } = props;

	const buttonProps = buttonPropsUpdate(props);
	const sizeClass = size ? `-${size}` : "-full";
	
	const buttonClass = `btn-${type}${sizeClass}`;
	const buttonIcon = icon && (type !== "primary") ? <div className="button-icon">{icon}</div> : null;

	return(
		<Button {...buttonProps} className={buttonClass}>
			{buttonIcon}
			{props.children}
		</Button>
	)
};

// * update button props to match Ant Design
const buttonPropsUpdate = (props: ButtonProps) => {
	const { type } = props
	let buttonType: "ghost" | "link" | "default" | "primary" | "dashed" | "danger" | undefined;

	switch(type){
		case "secondary":
			buttonType = "default";
			break;
		case "text" || "icon": 
			buttonType = "link";
			break;
		default:
			buttonType = "primary";
	}

	const newProps = {
		...props,
		type: buttonType,
		size: undefined,
		icon: undefined
	}

	return newProps;
}

// This export will be picked up in ./index.js
export default ButtonWrapper;
