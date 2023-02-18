import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
const NotificationUser = (props) => {
  return (
    <div>
       
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#ede7f6', borderRadius: 1, boxShadow: 3, mt:3 }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'grid' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               { props.el.date }
              </Typography>
               <Typography
                sx={{ display: 'grid' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                { props.el.message }
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
     
        
      
     
    </List>
    
    </div>
  )
}

export default NotificationUser
