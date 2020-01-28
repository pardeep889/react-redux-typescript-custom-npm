import React from 'react';
import Tooltip, { TooltipPropsWithTitle } from 'antd/es/tooltip';

import './less/tool-tip.less';

interface ToolTipProps extends TooltipPropsWithTitle {
	type: "high" | "medium" | "low";
	placement: "top" | "bottom" | "left" | "right";
}

//! tooltip overwrites wrapped class
const ToolTipWrapper = (props: ToolTipProps) => {
	const { type } = props;

	const toolTipClass = `tool-tip ${type}`

	return (
		<Tooltip {...props} overlayClassName={toolTipClass}>
			{props.children}
		</Tooltip>
	)
}

export default ToolTipWrapper;
