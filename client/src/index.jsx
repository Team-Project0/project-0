

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Formulaire from './components/Formulaire.jsx';

import Login from "./components/login.jsx";
import List from "./components/List.jsx"
import Tabuser from './components/Tabuser.jsx';



const App = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    $.get("http://localhost:3000/api/selectAllUsers").then((res)=>{setdata(res)})
    .catch=(err)=>{console.log(err)}
  }, []);

  return (
    <div>


      <Login />
      <Formulaire />
      <Tabuser data={data} />
      
      
      
    

    </div>
  )
}




ReactDOM.render(<App />, document.getElementById("app"));
// ReactDOM.render(<Tabuser data={data} />, document.getElementById("app"));