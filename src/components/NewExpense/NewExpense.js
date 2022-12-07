import React from "react";
import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpneseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <button>Add new Expense</button>
      <ExpenseForm onSaveExpenseData={saveExpneseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
