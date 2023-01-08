import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem.js.js";
import './Expenses.css';

function Expenses(props) {
  return(
  <Card className="expenses">
    <ExpenseItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}
      loc={props.items[0].loc}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
      loc={props.items[1].loc}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
      loc={props.items[2].loc}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
      loc={props.items[3].loc}
    ></ExpenseItem>
  </Card>
  );
}

export default Expenses;
