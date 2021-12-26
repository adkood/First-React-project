import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card"
import './ExpenseItemUtil.css';

function ExpenseItemUtil(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      ></ExpenseItem>
      ;
    </Card>
  );
}

export default ExpenseItemUtil;
