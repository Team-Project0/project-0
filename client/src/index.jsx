import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Formulaire from "./components/Formulaire.jsx";
import Login from "./components/login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBarDashboard from "./components/SideBarDashboard.jsx";
import axios from "axios";
import ChartLine from "./components/dashboard/ChartLine.jsx";
import SideBardashboarduser from "./components/SideBardashboarduser.jsx";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/getProduct").then((res) => {
      setItems(res.data);
    }).catch = (err) => {
      console.log(err);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/singin" element={<Formulaire />} />
        <Route exact path="/dashboard" element={<SideBarDashboard />} />

        <Route path="/dashboarduser" element={<SideBardashboarduser />} />
      </Routes>
    </div>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
