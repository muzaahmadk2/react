import React, { useState } from 'react' ;
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


function ExpenseItem(props) {

  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () =>{
    setAmount(100);
    console.log("clicked!!!!!!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={amount}
        loc={props.loc}
      />
      <button onClick={clickHandler}>Change-Expense</button>
    </Card>
  );
}
export default ExpenseItem;
