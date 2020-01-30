import React from 'react';
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';
import Arrow from '@icon/Arrow'
import './less/carousel.less';

interface InputNumberProps extends AntButtonProps {
    
}

function CarouselWrapper(props: InputNumberProps) {
     const {disabled} = props;
    const isDisabled = disabled;
    return(
        <div>
        <Button type="primary" disabled={isDisabled}> 
            <Arrow type="left"/>
        </Button>
        <Button type="primary" disabled={isDisabled}> 
            <Arrow type="right"/>
        </Button>
                    </div>
        );
    };
    
    export default CarouselWrapper;