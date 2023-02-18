import React from 'react'
import NotificationUser from './NotificationUser.jsx'
import Box from '@mui/material/Box'
const ListNotifUser = ({notif}) => {
  return (
    <div>
      <div className='notif_div'>
    {notif.map(el => (
      
        <NotificationUser el={el} />
      
    ))}
   </div>
    </div>
  )
}

export default ListNotifUser
