

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Formulaire from './components/Formulaire.jsx';
import Tabuser from './components/Tabuser.jsx'
import Login from "./components/login.jsx";
import List from "./components/List.jsx"
import ChartSales from './components/dashboard/ChartSales.jsx';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import RoutesComp from './routes/RoutesComp.js';
import ChartBar from './components/dashboard/ChartBar.jsx';
import DoughnutChart from './components/dashboard/DoughnutChart.jsx';
import axios from 'axios';
import ChartLine from './components/dashboard/ChartLine.jsx';
import BarChart from './components/dashboard/BarChart.jsx';
const App = () => {
const [data, setdata] = useState([]);
useEffect(() => {
 axios .get("http://localhost:3000/api/selectAllUsers").then((res) => {
    setdata(res);
  }).catch = (err) => {
    console.log(err);
  };
}, []);
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singin" element={<Formulaire />} />
        <Route path='chartSales' element={<ChartSales/>}/>
      </Routes>
    </div>
  );
}
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("app")
// );
  ReactDOM.render(<DoughnutChart/>, document.getElementById("app"));
 //ReactDOM.render(<ChartSales />, document.getElementById("app"));