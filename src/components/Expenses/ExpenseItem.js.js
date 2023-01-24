import react from 'react' ;
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


function ExpenseItem(props) {

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        loc={props.loc}
      />
    </Card>
    </li>
  );
}
export default ExpenseItem;
