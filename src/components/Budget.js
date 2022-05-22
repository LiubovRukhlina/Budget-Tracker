import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const auth = useAuth();

  useEffect(() => {
    console.log(auth.user?.budget);
    if (auth.user?.budget) {
      dispatch({
        type: "SET_BUDGET",
        payload: auth.user?.budget,
      });
    }
  }, []);

  return (
    <div className="alert alert-warning">
      <span>Budget: €{budget}</span>
    </div>
  );
};

export default Budget;
