import react, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/card";
import "./ExpenseItemUtil.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function ExpenseItemUtil(props) {
  const [currYear, setCurrYear] = useState("2020");
  
  const onChangingDateHandler = (yyear) => {
    // console.log("from expenseItemUtil.js");
    setCurrYear(yyear);
  };

  {
    /* using filter to make drop down work */
  }

  const filterFunction = props.item.filter(
    (filt) => (filt.date.getFullYear() == currYear)
  );

  return (
    <div>
      <Card className="expenses">
        {/* two way binding */}
        <ExpensesFilter
          selected={currYear}
          onChangingDate={onChangingDateHandler}
        />
        {/* using array.map() for redering dynamically */}
        <ExpenseChart expense = {filterFunction}/>
        <ExpenseList item = {filterFunction}/>
      </Card>
    </div>
  );
}

export default ExpenseItemUtil;
