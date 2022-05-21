import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref)=> {
    /* when the ref is coming from another upper component */
    return <div className={classes.input}>
        <label htmlFor={props.input.id} >{props.label}</label>
        {/* Spread operator here makes sure all props from .input are added to the input */}
        <input ref={ref} id={props.input.id} {...props.input} />
    </div>
        
});


export default Input;