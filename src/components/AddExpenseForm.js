import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { api } from "../services/api";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // api call
    const response = await api.post("/expenses/new", {
      name: name,
      cost: parseInt(cost),
      category: category,
    });
    const _id = response.data?.insertedId;

    if (_id) {
      const expense = {
        _id,
        name: name,
        cost: parseInt(cost),
        category: category,
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }

    setName("");
    setCost("");
    setCategory("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
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
          <label htmlFor="cost">Category</label>
          <input
            required="required"
            type="string"
            className="form-control"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
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
