import React, { useState } from 'react' ;
import './ExpenseForm.css';

function ExpenseForm(){

    const [enteredTitle, setEnteredtitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    // const titleHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle : event.target.value};
    //     });
    // };
    
    const titleHandler = (event) => {
        setEnteredtitle(event.target.value);
    };
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
            loc : 'delhi', 
        };
        console.log(expenseData);

    };

return (
    <form  onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control ">
                <label >Title</label>
                <input  type='text' onChange={titleHandler} />
            </div>
            <div className="new-expense__control ">
                <label >Amount</label>
                <input  type='number' min="0.01" step="0.01" onChange={amountHandler}/>
            </div>
            <div className="new-expense__control ">
                <label >Date</label>
                <input type='Date' min="2019-01-01" max="2022-12-31" onChange={dateHandler}/>
            </div>

        </div>
        <div  className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>

   
);

}

export default ExpenseForm;