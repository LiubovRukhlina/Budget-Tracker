import { createContext, useEffect, useReducer } from "react";
import { api } from "../services/api";

const calculateTotal = (list) => {
  return list.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
};

const AppReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...action.payload,
      };
    }
    case "UPDATE_STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "SET_BUDGET": {
      const newBudget = +action.payload || 0;
      console.log({ newBudget });
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
    case "UPDATE_EXPENSE": {
      console.log(action);
      const newExpenses = state.expenses.map((expense) => {
        if (expense._id === action.payload._id) {
          return action.payload;
        }
        return expense;
      });
      const newTotalExpenses = calculateTotal(newExpenses);

      return {
        ...state,
        expenses: newExpenses,
        totalExpenses: newTotalExpenses,
      };
    }
    case "DELETE_EXPENSE": {
      const newExpenses = state.expenses.filter(
        (expense) => expense._id !== action.payload
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
    expenses: fetchedExpenses,
    totalExpenses: calculateTotal(fetchedExpenses),
  };
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchState = async () => {
      const fetchedState = await initializer(state);

      dispatch({
        type: "UPDATE_STATE",
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
