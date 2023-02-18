import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
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
        labels: ['yes', 'no', ',ot sure'],
        datasets: [{
            label: 'poll',
            data: [6, 3, 9],
            backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) {
                    return null
                }
                return getGradient(chart);
            },
            borderWidth:0,
        }]
    }
    const options = {
        
    }
    
    function getGradient(chart) {
        const { ctx, chartArea: { top, bottom, left, right }, scales: { x, y } } = chart;
         const gradienSegment = ctx.createLinearGradient(0, bottom, 0, top);
        //let border={bottom - y.getP(5)/(bottom)-top}
       
        gradienSegment.addColorStop(0, 'red');
        gradienSegment.addColorStop(0.5, "red");
        gradienSegment.addColorStop(0.5, "green");
        gradienSegment.addColorStop(1, "green");
        return gradienSegment;
    }

    return(
<div>
        <Bar data={data} options={options}/>
    </div>
)};

export default BarChart;
