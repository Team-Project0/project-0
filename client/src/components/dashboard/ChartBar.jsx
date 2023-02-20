import React, { useState, useEffect } from "react";

import { Bar, Line } from "react-chartjs-2";
import Box from "@mui/material/Box";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import { height } from "@mui/system";
ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement);

const ChartBar = () => {
  const [chartData, setChartData] = useState({ labels: [], data: [] });

  const [eday, setDay] = useState([]);
  const [price, setPrice] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);
  const fetchingData = async function () {
    let labels = [];
    let data = [];
    try {
      const result = await axios.get("http://localhost:3000/api/getProduct");
      console.log(result);
      labels =
        result &&
        result.data.map((el) => {
          return labels.push(parseInt(el.eday));
        });
      data = result.data.map((el) => {
        return labels.push(parseInt(el.price));
      });

      // console.log(result);
      console.log("filtred data", labels, data);
      setChartData({ labels: labels, data: data });
    } catch (err) {
      console.log(err);
    }
  };

  const config = {
    labels: chartData.labels,
    datasets: [
      {
        label: "level of price",
        data: chartData.data,
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        borderWidth: 4,
        tension: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    title: { text: "Product", display: true },
    scales: {
      yAxes: [
        {
          min: 3,
          max: 9,
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: 40,
          marginLeft: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#ede7f6",
          borderRadius: 1,
          padding: 4,
        }}
      >
        <Line data={config} options={options} />
      </Box>
    </div>
  );
};

export default ChartBar;
