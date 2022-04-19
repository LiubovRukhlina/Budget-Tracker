import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { api } from "../services/api";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // api call
    const response = await api.post("/expenses/new", {
      name: name,
      cost: parseInt(cost),
    });
    const id = response.data?.id;

    if (id) {
      const expense = {
        id,
        name: name,
        cost: parseInt(cost),
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Price</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
