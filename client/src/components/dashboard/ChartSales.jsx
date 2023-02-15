import React from 'react'
import ReactDOM from "react-dom";
import { Line } from 'react-chartjs-2'
 import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  
} from 'chart.js';

import { height } from '@mui/system';
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const ChartSales = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        labels: 'Sales of the week',
        data: [6, 3, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill:true,
        tension :0.4
      }
    ]
  }
  
  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {
        min: 3,
        max:9
      }
    }
  }

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Line data={data} options={options}></Line>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default ChartSales

   ReactDOM.render(<ChartSales/>, document.getElementById("app"));

