import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      loc: "delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      loc: "delhi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      loc: "delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      loc: "delhi",
    },
  ];

  const addExpenseHandler =(expense)=>{
    console.log(expense);
  };

  return (
    <div className="App-header">
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items={expenses} />
    </div>
  );
};

export default App;
