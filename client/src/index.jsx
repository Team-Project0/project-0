

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Formulaire from './components/Formulaire.jsx';

import Login from "./components/login.jsx";

import ChartSales from './components/dashboard/ChartSales.jsx';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import RoutesComp from './routes/RoutesComp.js';
import ChartBar from './components/dashboard/ChartBar.jsx';
import DoughnutChart from './components/dashboard/DoughnutChart.jsx';

import ChartLine from './components/dashboard/ChartLine.jsx';
import BarChart from './components/dashboard/BarChart.jsx';

import Tabuser from "./components/Tabuser.jsx";
import CreateProduct from './components/CreateProduct.jsx';
import SideBarDashboard from './components/SideBarDashboard.jsx';
import axios from 'axios';

import ListProduct from './components/ListProduct.jsx';
import ChartComponent from './components/ChartComponent.jsx';



const App = () => {

const [user,setUser]=useState(null);

  return (
    <div>

      <Routes>
        <Route path="/" element={<Login/>}/>

        
<Route path='/singin' element={<Formulaire/>}/>
<Route exact path='/dashboard'  element={<SideBarDashboard />}/>


      </Routes>

   

    </div>
  );
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);


