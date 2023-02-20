import React from 'react'
import NotificationUser from './NotificationUser.jsx'


const ListNotifUser = ({notif}) => {
  return (
    <div>
       <div  className="grid-container16">
      <div className='notif_div'>
    {notif.map(el => (
      
        <NotificationUser el={el} />
      
    ))}
   </div>
   <img  className="imgnotif"src="https://i.pinimg.com/564x/62/a7/d2/62a7d2f1ef1f9c8951dcd5b0189e9a41.jpg"/>
    </div></div>
  )
}

export default ListNotifUser
