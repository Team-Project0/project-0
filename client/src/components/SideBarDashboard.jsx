import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import { color } from '@mui/system';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';
// import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
import ChartComponent from './ChartComponent.jsx';
import Tabuser from './Tabuser.jsx';
import axios from 'axios'
import NotificationChef from './NotificationChef.jsx';
// import NotificationUser from './NotificationUser.jsx';
import ListNotifUser from './ListNotifUser.jsx';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Logout from '@mui/icons-material/Logout';
import SearchBar from './SearchBar.jsx';
import Producteslestesuser from './Producteslestesuser.jsx';

const SideBarDashboard = (props) => {
    const drawerWidth = 240;
    const color= '#7d69ac';
     const [items, setItems] = useState([]);
    const [view, setView] = useState('chartcomponent');
    const [data, setdata] = useState([]);
    const [notif, setNotif] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/api/selectAllUsers").then((res) => {
        setdata(res.data);
      }).catch = (err) => {
        console.log(err);
      };
    }, []);
    useEffect(() => {
      axios.get("http://localhost:3000/api/getNotification").then((res) => {
        setNotif(res.data);
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
    const changeView = (option) => {
      setView(option)
    } 
    const renderView = () => {
      if(view==="dashboard"){
        
        return <ChartComponent/>
      }
      else if (view === "user") {
        return  <Tabuser data={data}/>;
      }
     
      else if (view === "messages") {
        return  <NotificationChef/>;
      }
      else if (view === "notification") {
        return  <ListNotifUser notif={notif}/>;
      }
      else if (view === "Product") {
        return  <Producteslestesuser items={items}/>;
      }
      
      
    }
   
  return (
    <div>
      <Box sx={{ display: 'flex'}}>
     
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,bgcolor:'background.default' }}
      >  
        <Toolbar>
        <SearchBar/>
        <Typography textAlign="center" sx={{color:"#673ab7",ml:90   ,mb:0}}>gharrad haifa</Typography>
        <Avatar  
        alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
 
        </Toolbar>
        
        </AppBar>
     
      <Drawer
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor:color
          },
        }}
        variant="permanent"
        anchor="left"
      >
       <img
        class="logosidebar"
        src="https://www.milka.com/etc.clientlibs/mdlz-common/clientlibs/clientlib-milka-redesign/resources/static/images/milka-logo.png"
       
      />
      
       <div className="link">
       <BarChartIcon sx={{ fontSize:40, color:"#d1c4e9" }}  />
         {/* <Link to="/chart"> */}
         
        <p class="p" onClick={() => changeView('dashboard')}>Dashboard</p>
        {/* </Link> */}
    </div>
    <div className="linkusers">
       <BarChartIcon sx={{ fontSize:40, color:"#d1c4e9" }}  />
        <p class="p" onClick={() => changeView('user')}>Users</p>
    </div>
    <div className="linkMessages">
       <BarChartIcon sx={{ fontSize:40, color:"#d1c4e9" }}  />
        <p class="p" onClick={() => changeView('messages')}>Messages</p>
    </div>
    <div className="linkNotif">
       <BarChartIcon sx={{ fontSize:40, color:"#d1c4e9" }}  />
        <p class="p" onClick={() => changeView('notification')}>Notifications</p>
    </div>
    
    <div className="linkProduct">
       <BarChartIcon sx={{ fontSize:40, color:"#d1c4e9" }}  />
        <p class="p" onClick={() => changeView('Product')}>Product</p>
    </div>
    {/* <Stack direction="row" spacing={2}>
      
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack> */}
       
        {/* <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout */}
      </Drawer>
      {/* <ChartComponent/> */}
      
      <div className="main">
        {renderView()}
      </div>
      </Box>
    </div>
  )
}

export default SideBarDashboard
