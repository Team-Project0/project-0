import axios from "axios";
import React, { useState } from "react";
import { deepPurple } from "@mui/material/colors";
// import {GlobalStyles } from "@mui/styled-engine";
import Box from "@mui/material/Box";
// import { ImageList } from "@mui/material";
// import { sizing } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [eday, setEday] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [img, setimage] = useState("");

  const uploadImg = (f) => {
    console.log("selectedImg: ");
    const formData = new FormData();
    console.log("formData : ", formData);

    formData.append("file", f);

    formData.append("upload_preset", "olrhqnut");

    console.log("form after appending:1 ", formData);

    axios
      .post("https://api.cloudinary.com/v1_1/dqhndevvq/image/upload", formData)
      .then((response) => {
        console.log(response);
        console.log("url: ", response.data.secure_url);
        setimage(response.data["secure_url"]);
        console.log("photo :", img);
      });
  };
  //   const handleSubmit=()=>{
  //     axios.post("http://localhost:3000/api/createProduct",{name,eday,quantity,price}).then(
  //     (res)=>{console.log(res)})
  //     .catch((err)=>{console.log(err)})
  // }
  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/createProduct", {
        name,
        eday,
        quantity,
        price,
        img,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="grid-container14">
        <div className="list-product3">
          <div className="item3">
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Name</InputLabel>
              <OutlinedInput
                type="text"
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>eday</InputLabel>
              <OutlinedInput
                type="text"
                label="eday"
                onChange={(e) => setEday(e.target.value)}
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Quantity</InputLabel>
              <OutlinedInput
                type="text"
                label="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Price</InputLabel>
              <OutlinedInput
                type="text"
                label="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <Button
              variant="outlined"
              component="label"
              sx={{
                "&:hover": {
                  backgroundColor: "#3A2774",
                  borderColor: "#0062CC",
                  boxShadow: "none",
                },
                borderRadius: 1,
                margin: "18px 5px",
                padding: "8px 133px",
                bgcolor: deepPurple[400],
                color: "#fff",
              }}
            >
              Photo
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(e) => {
                  uploadImg(e.target.files[0], e),
                    console.log(e.target.files[0]);
                }}
              />
            </Button>

            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#3a2774",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
                borderRadius: 1,
                margin: "18px 5px",
                padding: "8px 133px",
                bgcolor: deepPurple[400],
                color: "#fff",
              }}
              id="login"
              onClick={() => handleSubmit()}
            >
              ADD
            </Button>

            {/* </Box> */}
          </div>
        </div>
        <img
          className="milkaw"
          src="https://cdn.bmstores.co.uk/images/hpcProductImage/imgDetail750/377411-milka-daim-snax-145g.jpg"
        />
      </div>
    </div>
  );
};

export default CreateProduct;
