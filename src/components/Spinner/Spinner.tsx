import React from 'react';
import InputNumber, { InputNumberProps as AntInputProps } from 'antd/es/input-number';
import './less/spinner.less';

interface InputNumberProps extends AntInputProps {
    min: number,
    max: number
}

function SpinnerWrapper(props: InputNumberProps) {
    const {disabled,value,min,max} = props;
    let spinnerDisabled =  disabled ? "disabled" : "";
    const spinnerClass = `spinner ${spinnerDisabled} `;
    return(
        <InputNumber 
          {...props}
          className={spinnerClass}
        />
        
    );
};

export default SpinnerWrapper;