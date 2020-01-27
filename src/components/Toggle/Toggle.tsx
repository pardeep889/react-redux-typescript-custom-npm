import React from 'react';
import Switch, { SwitchProps as AntInputProps } from 'antd/es/switch';
import './less/toggle.less';

interface SwitchProps extends AntInputProps {}

function ToggleWrapper(props: SwitchProps) {
    const {disabled} = props;
    let toggleDisabled = "";
    disabled ? toggleDisabled = "disabled" : toggleDisabled = "";
    const toggleClass = `toggle ${toggleDisabled}`;
    return(
        <Switch className={toggleClass} {...props}/>
    );
};

export default ToggleWrapper;