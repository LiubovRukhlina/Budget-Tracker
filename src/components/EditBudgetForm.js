import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";

const EditBudgetForm = () => {
  const { dispatch } = useContext(AppContext);
  let auth = useAuth();
  const [newBudget, setBudget] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await api.put(`/users/${auth.user._id}`, {
      budget: parseInt(newBudget),
    });
    const success = response.status === 200;

    if (success) {
      dispatch({
        type: "SET_BUDGET",
        payload: parseInt(newBudget),
      });
    }
    setBudget("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="budget">Monthly Budget</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="budget"
            value={newBudget}
            onChange={(event) => setBudget(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            style={{ float: "left" }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditBudgetForm;
