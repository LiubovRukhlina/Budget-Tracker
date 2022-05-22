import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { api } from "../services/api";

const EditExpenseForm = ({
  id,
  name: initName,
  cost: initCost,
  category: initCategory,
  onSuccess,
}) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState(initName);
  const [cost, setCost] = useState(initCost);
  const [category, setCategory] = useState(initCategory);

  const onSubmit = async (event) => {
    event.preventDefault();
    // api call
    const response = await api.put(`/expenses/edit/${id}`, {
      name: name,
      cost: parseInt(cost),
      category: category,
    });

    if (response.status === 200) {
      const expense = {
        _id: id,
        name: name,
        cost: parseInt(cost),
        category: category,
      };

      dispatch({
        type: "UPDATE_EXPENSE",
        payload: expense,
      });
    }

    onSuccess();
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        backgroundColor: "lightgray",
        margin: 10,
        padding: 10,
      }}
    >
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

export default EditExpenseForm;
