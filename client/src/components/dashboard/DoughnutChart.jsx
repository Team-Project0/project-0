import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  const [chartData, setChartData] = useState({ labels: [], data: [] });

  const [name, setName] = useState([]);
  const [quantity, setQuantity] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);
  const fetchingData = async function () {
    let labels = [];
    let data = [];
    try {
      const result = await axios.get("http://localhost:3000/api/getProduct");
      console.log(result);
      for (const key of result.data) {
        data.push(parseInt(key.name));
        labels.push(parseInt(key.quantity));
      }
      console.log("filtred data", labels, data);
      setChartData({ labels: labels, data: data });
    } catch (err) {
      console.log(err);
    }
  };

  const config = {
    labels: chartData.data,
    datasets: [
      {
        label: "level of price",
        data: chartData.labels,

        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],

        pointBorderColor: "aqua",
        fill: true,
        tension: 0.1,
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
    <div>
      <Box
        sx={{
          marginTop: 20,
          marginLeft: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.default",
          boxShadow: 4,
          borderRadius: 1,
          padding: 4,
          margin: "0px 0px",
        }}
      >
        <Doughnut data={config} options={options}></Doughnut>
      </Box>
    </div>
  );
};

export default DoughnutChart;
