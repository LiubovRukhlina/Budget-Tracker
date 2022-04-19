import React, { useContext } from "react";
import { TiDelete, TiCoffee } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { api } from "../services/api";

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = async () => {
    // api call
    const response = await api.delete(`/expenses/${id}`);
    const success = response.status === 200;

    if (success) {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: id,
      });
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <TiCoffee size="1.5em"></TiCoffee>
      {name}
      <div>
        <span className=" mr-3">€{cost}</span>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          style={{ cursor: "pointer" }}
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
