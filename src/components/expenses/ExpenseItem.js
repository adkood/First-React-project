import react, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // console.log(props.title);  yaha marwayi h
  // state is seperated on per component instance basis
  // const [title , updateTitle] = useState(props.title);  // here useState() funtion return an array in which the first element is the the title and the second element is the funtion to be called
  // const clickHandler = () => {
  //   updateTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button> Click it </button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
