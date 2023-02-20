import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
 import IconButton from '@mui/material/IconButton';
 import moment from 'moment/moment';
const NotificationUser = (props) => {
  let handleSubmit=(id)=>{ 
    axios.delete(`http://localhost:3000/api/DeleteNotif/${id}`)
    window.location.reload()
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div>
       
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#fdfdfd', borderRadius:"65px", boxShadow: 3, mt:3 }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/49/c7/ba/49c7ba553e87812fdfb9f0242410b5b9.jpg" />
        </ListItemAvatar>
        <ListItemText
         
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'grid' }}
                component="span"
                variant="body2"
                color="text.primary"
                margin="18px 0px"
              >
               {moment(props.el.date).fromNow() }
              </Typography>
               <Typography
                sx={{ display: 'grid' ,fontFamily:"Lucida Sans",
                margin:"12px 0px"}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                { props.el.message }
              </Typography>
              <IconButton color="primary" aria-label="delete" size="small" onClick={(e)=>{handleSubmit(props.el.idnotification)}}>
  <DeleteIcon fontSize="small" />
</IconButton>
            </React.Fragment>
          }
        />
      </ListItem>
     
        
      
     
    </List>
    
    
    </div>
  )
}

export default NotificationUser
