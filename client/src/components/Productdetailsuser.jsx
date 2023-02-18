import React from 'react'
import Box from "@mui/material/Box";
const Productdetailsuser = (props) => {
  return (
    <div>
        <div class="_list-product">
       <Box
            sx={{
              marginTop: 5,
              marginLeft: 2,
              display: "flex",
              flexDirection: "column",
              boxShadow:4,
              bgcolor:'background.default' ,
              borderRadius:3,
              padding:"98px 128px 8px 77px",
              width:50
            }}
          >
            <div  class="grid-container1">
              
             <p class="name">{ props.item.name }</p>
           <p class="quantity">{ props.item.quantity }</p>
           </div>

          </Box>
          </div>
    </div>
  )
}

export default Productdetailsuser
