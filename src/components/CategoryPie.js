import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPie = () => {
  const { expenses = [] } = useContext(AppContext);
  const categories = expenses.reduce((accumulator, expense) => {
    accumulator[expense.category] =
      expense.cost + (accumulator?.[expense.category] || 0);
    return accumulator;
  }, {});
  console.log(categories);
  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: [
          "rgba(197,225,134, 0.9)",
          "rgba(255,204,51, 0.9)",
          "rgba(183,112,0, 0.9)",
          "rgba(115,146,56, 0.9)",
          "rgba(115,66,15, 0.9)",
          "rgba(33,74,44, 0.9)",
        ],
      },
    ],
  };

  return (
    <Pie
      data={data}
      width={80}
      height={50}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
            fullWidth: true,
            labels: {
              fontSize: 50,
              boxWidth: 50,

              usePointStyle: true,
              generateLabels: (chart) => {
                const datasets = chart.data.datasets;
                return datasets[0].data.map((data, i) => ({
                  text: `${chart.data.labels[i]} :  ${data} €`,
                  fillStyle: datasets[0].backgroundColor[i],
                }));
              },
            },
          },
        },
      }}
    />
  );
};

export default CategoryPie;
