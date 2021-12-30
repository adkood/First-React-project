import react from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {

  // for outputting conditional content
  if (props.item.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Found No Expenses
      </h2>
    );
  }

  return <ul className="expenses-list">
    {props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>;
};

export default ExpenseList;
