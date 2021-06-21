import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const addExpenseHandler = () => {
    setShowAddForm(true);
  };
  const cancelFormHandler = () => {
    setShowAddForm(false);
  };
  {
    return !showAddForm ? (
      <div className="new-expense">
        <button onClick={addExpenseHandler}>Add New Expense</button>
      </div>
    ) : (
      <div className="new-expense">
        <ExpenseForm
          onCancelForm={cancelFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }
};

export default NewExpense;
