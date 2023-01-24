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

  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onFilterChange={filterChangeHandler} />
      {props.items.map((expense) => (
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
