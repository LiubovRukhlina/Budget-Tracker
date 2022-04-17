import { createContext, useEffect, useReducer } from "react";
import { api } from "../services/api";

const calculateTotal = (list) => {
  return list.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...action.payload,
      };
    }
    case "SET_BUDGET": {
      const newBudget = +action.payload || 0;

      return {
        ...state,
        budget: newBudget,
      };
    }
    case "ADD_EXPENSE": {
      const newExpenses = [...state.expenses, action.payload];
      const newTotalExpenses = calculateTotal(newExpenses);

      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        totalExpenses: newTotalExpenses,
      };
    }
    case "DELETE_EXPENSE": {
      const newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      const newTotalExpenses = calculateTotal(newExpenses);

      return {
        ...state,
        expenses: newExpenses,
        totalExpenses: newTotalExpenses,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  budget: 0,
  expenses: [],
  totalExpenses: 0,
};

export const initializer = async (initialValue = initialState) => {
  const response = await api.get("/expenses");
  const fetchedExpenses = response.data;

  return {
    budget: 0,
    expenses: fetchedExpenses,
    totalExpenses: calculateTotal(fetchedExpenses),
  };
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchState = async () => {
      const fetchedState = await initializer();

      dispatch({
        type: "SET_STATE",
        payload: fetchedState,
      });
    };
    fetchState();
  }, []);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        totalExpenses: state.totalExpenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
