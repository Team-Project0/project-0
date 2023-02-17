import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
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

    //  const data = {
    //    labels: ["Mon", "Tue", "Wed"],
    //    datasets: [
    //      {
    //        labels: "Sales of the week",
    //        data: [6, 3, 9],
    //        backgroundColor: "aqua",
    //        borderColor: "black",
    //        pointBorderColor: "aqua",
    //        fill: true,
    //        tension: 0.4,
    //      },
    //    ],
    //  };
   const config = {
     labels: chartData.data,
     datasets: [
       {
         label: "level of price",
         data: chartData.labels,
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
    <div>
      <Doughnut data={config} options={options}></Doughnut>
    </div>
  );
}

export default DoughnutChart
