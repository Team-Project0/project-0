

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
 import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Formulaire from './components/Formulaire.jsx';

import Login from "./components/login.jsx";

import Tabuser from "./components/Tabuser.jsx";
import CreateProduct from './components/CreateProduct.jsx';
import SideBarDashboard from './components/SideBarDashboard.jsx';
import axios from 'axios';

import ListProduct from './components/ListProduct.jsx';



const App = () => {
const [data, setdata] = useState([]);
const [items, setItems] = useState([]);
const [user,setUser]=useState(null);

useEffect(() => {
  axios.get("http://localhost:3000/api/selectAllUsers").then((res) => {
    setdata(res.data);
  }).catch = (err) => {
    console.log(err);
  };
}, []);


useEffect(() => {
  axios.get("http://localhost:3000/api/getProduct").then((res) => {
    setItems(res.data);
  }).catch = (err) => {
    console.log(err);
  };
}, []);

  return (
    <div>

      {/* <Login/>
      
      <Formulaire />
      {/* <ChartSales /> */}
      
      
      {/* <Tabuser data={data} />
      <CreateProduct/>
     
      <SideBarDashboard/> */} 
      <Routes>
        <Route path="/" element={<Login/>}/>

        
<Route path='/singin' element={<Formulaire/>}/>
<Route path='/dashboard' element={<SideBarDashboard />}/>


      </Routes>
    {/* <Tabuser  data={data}/> */}
<ListProduct items={items}/>

    </div>
  )
}




ReactDOM.render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
, document.getElementById("app"));
//  ReactDOM.render(<App/> , document.getElementById("app"));
