import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $, { error } from 'jquery'
import Formulaire from './components/Formulaire.jsx';

import Login from "./components/login.jsx";
import List from "./components/List.jsx"
import AddIngredient from './components/addIngredient.jsx';
import Ingredients from './components/Ingredients.jsx';
import axios from 'axios';

const App = () => {
  const [data, setdata] = useState([])
  
useEffect(()=>{
  axios.get('http://localhost:3000/api/allIngredient').then((res)=>{
  setdata(res.data[0])
  console.log(res);
  }).catch((err)=>{console.error(err)})
},[])
  return (
    <div>

  

     <Ingredients data={data} />

    </div>
  )
}




ReactDOM.render(<App />, document.getElementById("app"));
