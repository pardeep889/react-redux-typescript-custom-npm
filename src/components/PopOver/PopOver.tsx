import React from 'react';
import Popover, { PopoverProps as AntPopoverProps } from 'antd/es/popover';

import './less/popover.less';

interface PopOverProps extends AntPopoverProps{

}

function PopOverWrapper(props: PopOverProps) {


	return(
		<Popover {...props} trigger="click" autoAdjustOverflow={false}/>
	)
};

// This export will be picked up in ./index.js
export default PopOverWrapper;