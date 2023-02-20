import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartSales = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        labels: "Sales of the week",
        data: [6, 3, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 3,
        max: 9,
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default ChartSales;
