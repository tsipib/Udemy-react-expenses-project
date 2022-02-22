import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isShowEditing, setIsShowEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const showEditingHandler = () => {
    setIsShowEditing(!isShowEditing);
  };

  return (
    <div className="new-expense">
      {isShowEditing ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={showEditingHandler}/>
      ) : (
        <button onClick={showEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
