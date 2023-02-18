import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
 import Drawer from '@mui/material/Drawer';
 import CssBaseline from '@mui/material/CssBaseline';
 import AppBar from '@mui/material/AppBar';
 import Toolbar from '@mui/material/Toolbar';
 import { color } from '@mui/system';
 import BarChartIcon from '@mui/icons-material/BarChart';
import DoughnutChart from './dashboard/DoughnutChart.jsx';
import BarChart from './dashboard/BarChart.jsx';
import ChartLine from './dashboard/ChartLine.jsx';
import ListProduct from './ListProduct.jsx';
 import Tabuser from './Tabuser.jsx'
 import {useNavigate}from 'react-router-dom';
import axios from 'axios'

const ChartComponent = (props) => {
    const drawerWidth = 240;
    const color= '#7d69ac';
     const [items, setItems] = useState([]);
    // const [data, setdata] = useState([]);
    // const navigate=useNavigate();
    useEffect(() => {
      axios.get("http://localhost:3000/api/getProduct").then((res) => {
        setItems(res.data);
      }).catch = (err) => {
        console.log(err);
      };
    }, []);
    // useEffect(() => {
    //   axios.get("http://localhost:3000/api/selectAllUsers").then((res) => {
    //     setdata(res.data);
    //   }).catch = (err) => {
    //     console.log(err);
    //   };
    // }, []);
  return (
    <div>
      <Box sx={{ display: 'flex'}}>
     
    <Box sx={{
        width: 464,
        height: 326,
        margin:"345px 52px",
        
      }}> 
      <DoughnutChart/>
      </Box> 
      <Box sx={{
        width: 464,
        height: 297,
        margin:" 345px 52px",
       
      }}> 
    <ChartLine/>
     </Box>
     <Box sx={{
        width: 464,
        height: 297,
        margin:"682px -516px",
      
      }}> 
     <BarChart/>
    </Box> 
    <ListProduct items={items} />

    </Box> 
    {/* <Tabuser data={data}/> */}
    </div>
  )
}

export default ChartComponent

