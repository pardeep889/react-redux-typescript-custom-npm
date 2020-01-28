import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/selector.less';

//* Custom API Props for Button
interface ButtonProps extends Omit<AntButtonProps, 'type' | 'icon'> {
	type: "primary" | "secondary";
	icon: JSX.Element;
}

function Selector(props: ButtonProps) {
	const { value, icon, type } = props;
	const newProps = buttonPropsUpdate(props);

	let buttonText = value ? value : props.children;

	const selectorClass = `selector-${type}`

	return(
	<Button {...newProps} className={selectorClass}>
		<div className="selector-icon">{icon}</div>
		{buttonText}
	</Button>
	)
};

const buttonPropsUpdate = (props: ButtonProps) => {
	const { type } = props
	let buttonType: "ghost" | "link" | "default" | "primary" | "dashed" | "danger" | undefined;

	switch(type){
		case "secondary":
			buttonType = "default";
			break;
		default:
			buttonType = "primary";
	}

	const newProps = {
		...props,
		type: buttonType,
		icon: undefined,
	}

	return newProps;
}

// This export will be picked up in ./index.js
export default Selector;
