import React from 'react'
import Box from "@mui/material/Box";
const ProductDetails = (props) => {
  return (
    <div>
      
       <div class="_list-product1">
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
            <div  class="grid-container11">
              {/* <img class="imgproduct"src="https://www.milka.com.pl/~/media/Project/Brands/Milka/pl/All-Products/milka-strawberry-100g/Thumbnails/pl-hd.png"></img> */}
             <p class="name">{ props.item.name }</p>
           <p class="quantity">{ props.item.quantity }</p>
           </div>

          </Box>
          </div>
    </div>
  )
}

export default ProductDetails
