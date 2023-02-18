import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  registerables,
} from "chart.js";

import { height } from "@mui/system";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  registerables,
);

const ChartLine = () => {
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
    //   labels =
    //     result &&
    //     result.data.map((el) => {
    //       return labels.push(parseInt(el.eday));
    //     });
    //   data = result.data.map((el) => {
    //     return labels.push(parseInt(el.price));
    //   });

      // console.log(result);
     

      for (const dataObj of result.data) {
        data.push(parseInt(dataObj.eday));
        labels.push(parseInt(dataObj.price));
        }
         console.log("filtred data", labels, data);
   setChartData({labels:labels,data:data})
      // setChartData({
      //   labels: prodDay,
      //   datasets: [
      //     {
      //       label: "level of price",
      //       data:prodPrice,
      //       backgroundColor: ["rgba(75, 192, 192, 0.6)"],
      //       borderWidth: 4,
      //     },
      //   ],
      // });
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
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        borderWidth: 4,
        tension:0.4
      },
    ],
  };

const options = {
    responsive: true,
    title: { text: "Product", display: true },
    scales: {
        yAxes: [
          {
        min: 1,
        max:400
      }
            // {
            //   ticks: {
            //     autoSkip: true,
            //     maxTicksLimit: 10,
            //     beginAtZero: true,
            //   },
            //   gridLines: {
            //     display: false,
            //   },
            // },
        ],
        xAxes: [
            {
                gridLines: {
                    display: false,
                },
            },
        ],
    }
}
  return (
    <div>
      <Line data={config} options={options} />
    </div>
  );
};


export default ChartLine;
