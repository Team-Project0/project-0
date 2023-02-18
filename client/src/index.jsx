
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
// import Ingredients from './components/Ingredients.jsx';
import Formulaire from './components/Formulaire.jsx';

import Login from "./components/login.jsx";

// import ChartSales from './components/dashboard/ChartSales.jsx';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
// import RoutesComp from './routes/RoutesComp.js';
// import ChartBar from './components/dashboard/ChartBar.jsx';
import DoughnutChart from './components/dashboard/DoughnutChart.jsx';

// import ChartLine from './components/dashboard/ChartLine.jsx';
// import BarChart from './components/dashboard/BarChart.jsx';

//import Tabuser from "./components/Tabuser.jsx";
//import CreateProduct from './components/CreateProduct.jsx';
import SideBarDashboard from './components/SideBarDashboard.jsx';
import axios from 'axios';

import ListProduct from './components/ListProduct.jsx';

const App = () => {
  const [data, setdata] = useState([])
  const [show, setShow] = useState(false)

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/allIngredient').then((res) => {
  //     setdata(res.data[0])
  //     console.log(res);
  //   }).catch((err) => { console.error(err) })
  // }, [show])


     

  const [items, setItems] = useState([]);
  //const [user, setUser] = useState(null);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/selectAllUsers").then((res) => {
  //     setdata(res.data);
  //   }).catch = (err) => {
  //     console.log(err);
  //   };
  // }, []);


  useEffect(() => {
    axios.get("http://localhost:3000/api/getProduct").then((res) => {
      setItems(res.data);
    }).catch = (err) => {
      console.log(err);
    };
  }, []);

  return (
    <div>
      {/* <Ingredients data={data} show={show} setShow={setShow}/> */}
      {/* <Login/>
      
      <Formulaire />
      {/* <ChartSales /> */}
      
      
      {/* <Tabuser data={data} />
      <CreateProduct/>
     
      <SideBarDashboard/> */}
      <Routes>
        <Route path="/" element={<Login />} />


        
        <Route path='/singin' element={<Formulaire />} />
        <Route path='/dashboard' element={<SideBarDashboard />} />


      </Routes>
      {/* <Tabuser  data={data}/> */}
      {/* <ListProduct items={items} />
      <DoughnutChart /> */}

    </div>
  
  )
}
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  )
  // ReactDOM.render(<DoughnutChart/>, document.getElementById("app"));
  //ReactDOM.render(<ChartSales />, document.getElementById("app"));
