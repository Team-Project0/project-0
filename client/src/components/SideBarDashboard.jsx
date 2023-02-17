import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { color } from '@mui/system';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateProduct from './CreateProduct.jsx';
const SideBarDashboard = () => {
    const drawerWidth = 240;
    const color= '#7d69ac';
  return (
    <div>
      <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,bgcolor:'background.default' }}
      >
        <Toolbar>
          {/* <Typography variant="h6" noWrap component="div" color= 'primary.main'>
            Permanent drawer
          </Typography> */}
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
        alt="h"
        // style={{ width:'10%', height:"10%" }}
      />
      
       <div className="link">
       <BarChartIcon sx={{ fontSize:40, color:"#d1c4e9" }}  />
        <p class="p">Add Products</p>
    </div>
       
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
       
      </Box>
      <Box component="main" sx={{ flexGrow: 1,m:-12,mr:0}}>
      
       
        <CreateProduct/>
      </Box>
   
    </Box> 
    </div>
  )
}

export default SideBarDashboard
