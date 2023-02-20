import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";
import axios from "axios";

import AuthService from "../services/auth";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { deepPurple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { Link } from "react-router-dom";
import AuthService from "../services/auth";
import { useNavigate } from "react-router-dom";

const Formulaire = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [photoProfil, setPhotoProfil] = useState("");
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");

  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  const [errorMessage, setErrorMessage] = useState("");


  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage(" Strong Password");
    } else {
      setErrorMessage("Weak Password");
    }
  };

  const uploadImg = (f) => {
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
        setPhotoProfil(response.data["secure_url"]);
        console.log("photo :", photoProfil);
      });
  };

  const handleSubmit = () => {
    AuthService.register(
      userName,
      password,
      firstName,
      lastName,
      photoProfil,
      role,
      email
    )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  const isValidPw = (pw) => {
    return /^[a-zA-Z0-9]w{6,}$/.test(pw);
  };

  return (
    <div id="formulaire">
      <img
        className="logo"
        src="https://www.milka.com/etc.clientlibs/mdlz-common/clientlibs/clientlib-milka-redesign/resources/static/images/milka-logo.png"
        alt="h"
      />
      <div className="grid-container">
        <div className="item3">
          <Box
            sx={{
              marginTop: 0,
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
              <InputLabel>E-mail</InputLabel>
              <OutlinedInput
                type="email"
                label="E-mail"
                onChange={(e) => {
                  setemail(e.target.value), validateEmail(e);
                }}
              />
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {emailError}
              </span>
            </FormControl>
            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>First Name</InputLabel>
              <OutlinedInput
                type="text"
                label="User name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>

            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>Last Name</InputLabel>
              <OutlinedInput
                type="text"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <TextField
              error
              id="outlined-error-helper-text"
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              label="Password"
              type="Password"
              defaultValue="Hello World"
              helperText={errorMessage}
              onChange={(e) => {
                setPassword(e.target.value), validate(e.target.value);
              }}
            />

            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>ROLE</InputLabel>
              <OutlinedInput
                label="Role"
                type="text"
                onChange={(e) => setRole(e.target.value)}
              />
            </FormControl>

            <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>User Name</InputLabel>
              <OutlinedInput
                type="text"
                label="Last Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>

            <Button
              variant="outlined"
              component="label"
              sx={{
                m: 1,
                zIndex: "center",
                width: "25ch",
                position: "center",
                boxShadow: 3,
                display: "grid",
                backgroundColor: "whitesmoke",
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
              variant="contained"
              component="label"
              id="login"
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
              onClick={(e) => {
                {
                  handleSubmit(e), uploadImg(photoProfil, e);
                }
              }}
            >
              Sign up
            </Button>
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


export default Formulaire;
