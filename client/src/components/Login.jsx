import React, { useState, useEffect } from "react";

 import { useNavigate } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
// import { GlobalStyles } from "@mui/styled-engine";
import Box from "@mui/material/Box";
// import { ImageList } from "@mui/material";
// import { sizing } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import authService from "../services/auth.js";
// import { useEffect } from "react";
const color = deepPurple[400];
const Login = () => {
  const [password, setPassword] = useState("");

  const [userName, setUserName] = useState("");
  // console.log("hello");
  // const service = new authService();
  // console.log(service);
   const navigate=useNavigate();
  // useEffect(() => {
  //   console.log("hello");
  // }, []);

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
     authService
       .login("aya.zeddini@gmail.com", userName, password)
       .then((res) => {
         //  console.log(res);
         console.log(res.user.role);
         if (res.user.role === "chef") {
           navigate("/dashboard");
         } else {
           <Link to="/" />;
         }
       })
       .catch((err) => {
         console.log(err);
       });
  
  };

  return (
    <div>
      {/* <GlobalStyles
                styles={{ body: { background: color } }}
               
            /> */}

      <img
        className="logo"
        src="https://www.milka.com/etc.clientlibs/mdlz-common/clientlibs/clientlib-milka-redesign/resources/static/images/milka-logo.png"
        alt="h"
        // style={{ width:'10%', height:"10%" }}
      />
      <div className="grid-container">
        <div className="item3">
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
              // onSubmit={handleSubmit}
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>User name</InputLabel>
              <OutlinedInput
                type="text"
                label="User name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type="Password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </Button>

            <Link to="/singin">
              {/* <Button>JDIO</Button> */}
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
                SignIn
              </Button>
            </Link>
          </Box>
        </div>
        <div className="item4">
          {" "}
          <img
            className="rotation"
            src="https://www.milka.com/content/dam/mondelezwoop/milka/milka-chocolate.png"
          />
        </div>
        <img
          className="chocolate2"
          src="https://www.milka.com/content/dam/mondelezwoop/milka/chunk-2.png"
        />
      </div>
    </div>
  );
};

export default Login;
