import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

import './less/selector.less';

//* Custom API Props for Button
interface ButtonProps extends Omit<AntButtonProps, 'type'> {
	type: "primary" | "secondary";
}

function Selector(props: ButtonProps) {

	return(
		<div></div>
	)
};

// This export will be picked up in ./index.js
export default Selector;
