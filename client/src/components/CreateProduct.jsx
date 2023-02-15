import React from "react";
// import { useHistory } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { GlobalStyles } from "@mui/styled-engine";
import Box from "@mui/material/Box";
import { ImageList } from "@mui/material";
import { sizing } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

const CreateProduct = () => {
  return (
    <div>
      
      <img
        class="logo"
        src="https://www.milka.com/etc.clientlibs/mdlz-common/clientlibs/clientlib-milka-redesign/resources/static/images/milka-logo.png"
        alt="h"
        // style={{ width:'10%', height:"10%" }}
      />
      <div class="grid-container">
        <div class="item3">
          <Box
            sx={{
              marginTop: 20,
              marginLeft: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.default",
              borderRadius: 1,
              padding: 4,
            }}
          >
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Name</InputLabel>
              <OutlinedInput type="text" label="Name" />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>eday</InputLabel>
              <OutlinedInput type="text" label="eday" />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Quantity</InputLabel>
              <OutlinedInput type="text" label="Quantity" />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Price</InputLabel>
              <OutlinedInput type="text" label="Price" />
            </FormControl>

            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Quantity</InputLabel>
              <OutlinedInput type="Password" label="Password" />
            </FormControl>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#3a2774",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
                borderRadius: 1,
                mt: 3,
                mb: 2,
                bgcolor: deepPurple[400],
                color: "#fff",
              }}
              id="login"
            >
              Login
            </Button>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#3a2774",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
                borderRadius: 1,
                mt: 3,
                mb: 2,
                bgcolor: deepPurple[400],
                color: "#fff",
              }}
              id="login"
              onClick={() => history.push("/singup")}
            >
              SignIn
            </Button>
          </Box>
        </div>
        <div class="item4">
          {" "}
          <img
            class="rotation"
            src="https://www.milka.com/content/dam/mondelezwoop/milka/milka-chocolate.png"
          />
        </div>
        <img
          class="chocolate2"
          src="https://www.milka.com/content/dam/mondelezwoop/milka/chunk-2.png"
        />
      </div>
    </div>
  )
}

export default CreateProduct