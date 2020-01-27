import React from 'react';
import Tooltip, { AbstractTooltipProps as AntAbstractTooltipProps } from 'antd/es/tooltip';

import './less/tool-tip.less';

interface ToolTipProps extends AntAbstractTooltipProps {

}

const ToolTipWrapper = (props: ToolTipProps) => {
	return (
		<div>
			
		</div>
		// <Tooltip {...props}>
		// 	{props.children}
		// </Tooltip>
	)
}

export default ToolTipWrapper;
