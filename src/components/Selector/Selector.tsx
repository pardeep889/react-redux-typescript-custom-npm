import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/selector.less';

//* Custom API Props for Button
interface ButtonProps extends Omit<AntButtonProps, 'type' | 'icon'> {
	type: "primary" | "secondary";
	icon: JSX.Element;
	label: string;
}

function Selector(props: ButtonProps) {
	const { value, icon, type, label } = props;
	const newProps = buttonPropsUpdate(props);

	const valueClass = value ? "-value" : "-novalue";
	const selectorLabel = value ? <h6 className="selector-label">{label}</h6> : null;

	const selectorClass = `selector-${type}${valueClass}`;
	const selectorIcon = <div className="selector-icon">{icon}</div>;

	return(
		<>
			{selectorLabel}
			<Button {...newProps} className={selectorClass}>
				{selectorIcon}
				{value ? value : props.children}
			</Button>
		</>
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
