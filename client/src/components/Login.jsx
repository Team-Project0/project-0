import React,{useState}from "react";

 import {useNavigate}from 'react-router-dom';
import { deepPurple } from "@mui/material/colors";
import { GlobalStyles } from "@mui/styled-engine";
import Box from "@mui/material/Box";
import { ImageList } from "@mui/material";
import { sizing } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const color = deepPurple[400];
const Login = () => {
  const [password, setPassword] = useState("");
 
  const [userName, setUserName] = useState("");

 

const navigate=useNavigate();
// window.location.reload()

// const handleSubmit = ()=> {

// navigate('/dashboard');

// };
  return (
    <div>
      {/* <GlobalStyles
                styles={{ body: { background: color } }}
               
            /> */}

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
              <InputLabel>User name</InputLabel>
              <OutlinedInput type="text" label="User name" onChange={(e)=>setUserName(e.target.value)} />
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput type="Password" label="Password" onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            {/* <Link to="/dashboard"> */}
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
              onClick={()=>{navigate("/dashboard")}}
              
            >
              Login
            </Button>
            {/* </Link> */}
            <Link to="/singin">
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
  );
};

export default Login;
