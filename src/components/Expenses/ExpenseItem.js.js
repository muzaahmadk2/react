import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const clickHandler = () =>{
    console.log("clicked!!!!!!!!!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        loc={props.loc}
      />
      <button onClick={clickHandler}>delete</button>
    </Card>
  );
}
export default ExpenseItem;
