
import {useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) =>{
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
    
    const submitHandler = event => {
        event.preventDefault(); //page doesn't refresh

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount; //convert from string to number
        if (enteredAmount.trim().length === 0 || 
        enteredAmountNum <1 || enteredAmountNum >5 
        ){
            setAmountIsValid(false)
            return;
            //this 'return' will stop the execution of the rest of the submitHandler function
        }
        props.onAddToCart(enteredAmountNum);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        {/* with a form you submit on the <form/> and not the <button/> */}
        <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{
            id:"amount_" + props.id,
            type:"number",
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
};

export default MealItemForm;