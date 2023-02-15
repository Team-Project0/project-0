

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Formulaire from './components/Formulaire.jsx';

import Login from "./components/login.jsx";
import List from "./components/List.jsx"
import ChartSales from './components/dashboard/ChartSales.jsx';
const App = () => {

 
  return (
    <div>

      <Login/>
      
      <Formulaire />
      {/* <ChartSales/> */}

    </div>
  )
}

   //ReactDOM.render(<App />, document.getElementById("app"));
