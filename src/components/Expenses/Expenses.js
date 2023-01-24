import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js.js";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter 
      selected={year} 
      onFilterChange={filterChangeHandler}
       />

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          loc={expense.loc}
        />
      ))}
    </Card>
  );
}

export default Expenses;
