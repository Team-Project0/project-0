import React from 'react'
import Box from "@mui/material/Box";
const ProductDetails = (props) => {
  return (
    <div>
       <Box
            sx={{
              marginTop: 5,
              marginLeft: 2,
              display: "flex",
              flexDirection: "column",
             
              bgcolor: "background.default",
              borderRadius: 1,
              padding:10,
              width:50
            }}
          ><div  class="grid-container1">
             <div class="grid-item1"><p class="name">{ props.item.name }</p></div>
             <div class="grid-item1"><p class="quantity">{ props.item.quantity }</p></div>
           </div>

          </Box>
    </div>
  )
}

export default ProductDetails
