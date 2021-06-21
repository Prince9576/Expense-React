import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  console.log("Props in List", props);
  if (props.expenses.length === 0) {
    return <p className="expenses-list__fallback">No Content Found</p>;
  } else {
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpenseList;
