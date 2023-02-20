import React from "react";
import Box from "@mui/material/Box";
const ProductDetails = (props) => {
  return (
    <div>
      <div className="_list-product1">
        <Box
          sx={{
            marginTop: 5,
            marginLeft: 2,
            display: "flex",
            flexDirection: "column",
            boxShadow: 4,
            bgcolor: "background.default",
            borderRadius: 3,
            padding: "98px 128px 8px 77px",
            width: 50,
          }}
        >
          <div className="grid-container11">
            <p className="name">{props.item.name}</p>
            <p className="quantity">{props.item.quantity}</p>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProductDetails;
