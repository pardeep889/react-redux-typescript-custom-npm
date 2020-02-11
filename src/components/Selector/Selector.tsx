import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/selector.less';
import { Title } from '@components/index';

//* Custom API Props for Button
interface SelectorProps extends Omit<AntButtonProps, 'type' | 'icon'> {
	type: "primary" | "secondary";
	icon: JSX.Element;
	selectedValue?: string;

	title?: string;
	promptText?: string;
	popup?: boolean;
	underline? : boolean
}

function Selector(props: SelectorProps) {
	const { icon, type, title, underline, selectedValue, promptText, popup } = props;
	const newProps = selectorPropsUpdate(props);

	// CLASSES
	const valueClass = selectedValue ? "-value" : "-novalue";
	const popupClass = popup ? "-popup" : "";
	const selectorClass = type === "primary" ? `selector-${type}${valueClass}${popupClass}` : `selector-${type}`;
	
	// ELEMENTS
	const selectorIcon = <div className="selector-icon">{icon}</div>;
	const selectorUnderline = underline ? <div className="selector-underline"></div> : null;
	const selectorLabel = selectedValue ? <Title className="selector-title" level="h6">{title}</Title> : null;
	const selectorText = selectedValue ? selectedValue : promptText;

	if(type === "primary"){
		return (
			<div className="selector-primary-container">
				{popup ? null : selectorLabel}
				<Button {...newProps} className={selectorClass}>
					{selectorIcon}
					{popup ? promptText : selectorText}
					{popup ? null : selectorUnderline}
				</Button>
			</div>
		)
	}

	return(
			<Button {...newProps} className={selectorClass}>
				{selectorIcon}
				{selectedValue}
			</Button>
	)
};

const selectorPropsUpdate = (props: SelectorProps) => {
	// remove unecessary props for antd button;
	const { type, selectedValue, underline, popup, title, promptText } = props
	let selectorType: "ghost" | "link" | "default" | "primary" | "dashed" | "danger" | undefined;

	switch(type){
		case "secondary":
			selectorType = "default";
			break;
		default:
			selectorType = "primary";
	}

	const newProps = {
		...props,
		type: selectorType,
		icon: undefined,
	}

	selectedValue ? delete newProps.selectedValue : null;
	popup ? delete newProps.popup : null;
	underline ? delete newProps.underline : null;
	title ? delete newProps.title : null;
	promptText ? delete newProps.promptText : null;

	return newProps;
}

// This export will be picked up in ./index.js
export default Selector;
