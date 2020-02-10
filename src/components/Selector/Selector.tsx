import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/selector.less';

//* Custom API Props for Button
interface ButtonProps extends Omit<AntButtonProps, 'type' | 'icon'> {
	type: "primary" | "secondary";
	icon: JSX.Element;
	label: string;
	underline?: boolean;
	valueSelected?: boolean;
	popUp?: boolean;
}

function Selector(props: ButtonProps) {
	const { icon, type, label, underline, valueSelected, popUp } = props;
	const newProps = buttonPropsUpdate(props);

	const valueClass = valueSelected ? "-value" : "-novalue";
	const popUpClass = popUp ? "-popup" : "";
	const selectorUnderline = underline ? <div className="selector-underline"></div> : null;

	let selectorClass = type === "primary" ? `selector-${type}${valueClass}${popUpClass}` : `selector-${type}`;

	const selectorIcon = <div className="selector-icon">{icon}</div>;
	const selectorLabel = valueSelected ? <h6 className="selector-label">{label}</h6> : null;

	if(type === "primary"){
		return (
			<div>
			{popUp ? null : selectorLabel}
			<Button {...newProps} className={selectorClass}>
				{selectorIcon}
				{props.children}
				{selectorUnderline}
			</Button>
		</div>
		)
	}

	return(
			<Button {...newProps} className={selectorClass}>
				{selectorIcon}
				{props.children}
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
