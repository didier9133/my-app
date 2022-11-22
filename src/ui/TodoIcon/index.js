import React from 'react';
import { ReactComponent as EditSVG } from './edit.svg';

const iconTypes={
    'edit': (color)=><EditSVG fill={color}></EditSVG>
}

export default function TodoIcon({type, color='gray', onClick}){
    return(
        <span className={`Icon Icon-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}