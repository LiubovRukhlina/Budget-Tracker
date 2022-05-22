import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense._id}
          id={expense._id}
          name={expense.name}
          cost={expense.cost}
          category={expense.category}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
