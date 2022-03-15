import React from "react";

import { AppProvider } from "./context/AppContext";

import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import Nav from "./components/Nav";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
  // Sample data
  const data = {
    labels: ["Remaining", "Spent"],
    datasets: [
      {
        data: [1000, 1000],
        backgroundColor: ["green", "black"],
      },
    ],
  };

  return (
    <Pie
      data={data}
      width={100}
      height={50}
      options={{ maintainAspectRatio: false }}
    />
  );
};

const App = () => {
  return (
    <AppProvider>
      <Nav />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
            <Remaining />
            <ExpenseTotal />
          </div>
          <div className="col-sm"></div>
          <div className="col-sm">
            <BudgetChart />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
