import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import moment from "moment/moment";
const Productdetailsuser = (props) => {
  let handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3000/api/DeleteProduct/${id}`)
      // window.location.reload()
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Card sx={{ maxWidth: " 200px", borderRadius: "11px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="70%"
            margin="0px 26px"
            image={props.item.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Keania One",
                fontSize: "1rem",

                textTransform: "uppercase",
              }}
            >
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p
                sx={{
                  fontFamily: "Montserrat",
                  color: "#fff",
                  opacity: 0.87,
                  marginTop: "2rem",
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                quantity:{props.item.quantity}
              </p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p
                sx={{
                  fontFamily: "Montserrat",
                  color: "#fff",
                  opacity: 0.87,
                  marginTop: "2rem",
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                Price:{props.item.price} TND
              </p>
              <IconButton
                color="primary"
                aria-label="delete"
                size="small"
                onClick={(e) => {
                  handleSubmit(props.item.idProduct);
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Productdetailsuser;
