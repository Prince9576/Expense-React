import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterYearSaveHandler = (year) => {
    setFilteredYear(year);
    console.log("Year", year);
  };
  const filteredExpense = props.expenses.filter((exp) => {
    return exp.date.getFullYear() === parseInt(filteredYear);
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onFilterYearSave={filterYearSaveHandler}
        />
        <ExpenseList expenses={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
