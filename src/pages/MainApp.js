import React, { useContext } from "react";

import { AppContext, AppProvider } from "../context/AppContext";

import Budget from "../components/Budget";
import Remaining from "../components/Remaining";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import EditBudgetForm from "../components/EditBudgetForm";
import Nav from "../components/Nav";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Footer from "../components/Footer";
import CategoryPie from "../components/CategoryPie";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
  const { totalExpenses, budget } = useContext(AppContext);
  const remaining = budget - totalExpenses;

  const data = {
    labels: ["Remaining", "Expenses"],
    datasets: [
      {
        data: [remaining, totalExpenses],
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

const MainApp = () => {
  return (
    <AppProvider>
      <div className="container  ">
        <h3 className="mt-3" style={{}}>
          Set Monthly Budget
        </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <EditBudgetForm />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
        <hr />
        <div className="row mt-3 py-2" style={{ backgroundColor: "lightgrey" }}>
          <div className="col-sm">
            <Budget />
            <Remaining />
            <ExpenseTotal />
          </div>
          <div className="col-sm"></div> {/*empty column*/}
          <div className="col-sm">
            <BudgetChart />
          </div>
        </div>
        <hr />
        <h3 className="mt-3">My past expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <hr />
        <h3 className="mt-3">Expenses by categories</h3>
        <div
          className="row mt-3 py-2"
          style={{
            backgroundColor: "lightgrey",
            height: 300,
          }}
        >
          <div className="col-sm">
            <CategoryPie />
          </div>
        </div>
      </div>
      <Footer />
    </AppProvider>
  );
};

export default MainApp;
