import React, { useContext, useState } from "react";
import { TiDelete, TiCoffee, TiEdit } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { api } from "../services/api";
import EditExpenseForm from "./EditExpenseForm";

const ExpenseItem = ({ id, name, cost, category }) => {
  const { dispatch } = useContext(AppContext);
  const [showEditForm, setShowEditForm] = useState(false);

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
  const handleToggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <TiCoffee size="1.5em"></TiCoffee>
        {name}
        <span className=" mr-3">{category}</span>
        <div>
          <span className=" mr-3">€{cost}</span>

          <TiDelete
            size="1.5em"
            onClick={handleDeleteExpense}
            style={{ cursor: "pointer" }}
          ></TiDelete>
          <TiEdit
            size="1.5em"
            onClick={handleToggleEditForm}
            style={{ cursor: "pointer" }}
          ></TiEdit>
        </div>
      </li>
      {showEditForm && (
        <EditExpenseForm
          id={id}
          name={name}
          cost={cost}
          category={category}
          onSuccess={handleToggleEditForm}
        />
      )}
    </>
  );
};

export default ExpenseItem;
