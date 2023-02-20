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

const BarChart = () => {
  const data = {
    labels: ["yes", "no", ",ot sure"],
    datasets: [
      {
        label: "poll",
        data: [6, 3, 9],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return getGradient(chart);
        },
        borderWidth: 0,
      },
    ],
  };
  const options = {};

  function getGradient(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
      scales: { x, y },
    } = chart;
    const gradienSegment = ctx.createLinearGradient(0, bottom, 0, top);

    gradienSegment.addColorStop(0, "#673ab7");
    gradienSegment.addColorStop(0.5, "#d1c4e9");

    return gradienSegment;
  }

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
        <Bar data={data} options={options} />
      </Box>
    </div>
  );
};

export default BarChart;
