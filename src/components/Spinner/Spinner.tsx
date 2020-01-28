import React from 'react';
import InputNumber, { InputNumberProps as AntInputProps } from 'antd/es/input-number';
import './less/spinner.less';

interface InputNumberProps extends AntInputProps {}

function SpinnerWrapper(props: InputNumberProps) {
    const {disabled} = props;
    let spinnerDisabled = "";
    disabled ? spinnerDisabled = "disabled" : spinnerDisabled = "";
    const spinnerClass = `spinner ${spinnerDisabled}`;
    return(
        <InputNumber {...props}/>
        
    );
};

export default SpinnerWrapper;