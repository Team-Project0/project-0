import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import * as Yup from "yup";

const Formulaire = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [photoProfil, setPhotoProfil] = useState("");
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("")
  const [selectedImg, setSelectedImg] = useState("");
  const [cloudImg, setcloudImg] = useState("")
  const [error, setError] = useState(null);
  const [errorPw, setErrorPw] = useState(null);


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
        setPhotoProfil(response.data["secure_url"]);
        console.log("photo :",photoProfil);

      });
  };

  const handleSubmit = () => {
        console.log("photo :",photoProfil)
        axios
          .post(`http://localhost:3000/api/signUp`, {
            e_mail:email,
            lastName: lastName,
            firstName: firstName,
            password: password,
            profilphoto: photoProfil,
            role: role,
            userName: userName,
          // })
      }).catch((err) => {
        console.log(err);
      });
 
  };
  const isValidEmail=(email) =>{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }
   const isValidPw=(pw)=>{
   return  /^[a-zA-Z0-9]w{6,}$/.test(pw)
  }
  const pwValid = event => {
    if (!isValidPw(event.target.value)) {
      setErrorPw('Weak password!');
    } else {
      setErrorPw(null)
    }
  }
  
  const emailValid = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null)
    }
  }
  
  return (
    <div id="formulaire">
      <FormControl
      
        sx={{
          m: 1,
          zIndex: "center",
          width: "25ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
        variant="outlined"
      >
        <InputLabel>E-mail</InputLabel>
        <OutlinedInput
          rules={[{ required: true }]}
          type="e-mail"
          label="E-mail"
          onChange={(e) => {setemail(e.target.value),emailValid(e)}}
        />
         {error && <h2 style={{color: 'red',height:"5px"}}>{error}</h2>}

      </FormControl>
      <FormControl
        sx={{
          m: 1,
          zIndex: "center",
          width: "25ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
        variant="outlined"
      >
        <InputLabel>First Name</InputLabel>
        <OutlinedInput
          type="text"
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          zIndex: "center",
          width: "25ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
        variant="outlined"
      >
        <InputLabel>Last Name</InputLabel>
        <OutlinedInput
          type="text"
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          zIndex: "center",
          width: "25ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
        variant="outlined"
      >
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type="Password"
          label="Password"
          onChange={(e) => {setPassword(e.target.value),pwValid(e)}}
        />
       {errorPw && <h2 style={{color: 'red'}}>{errorPw}</h2>}
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          zIndex: "center",
          width: "25ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
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
        sx={{
          m: 1,
          zIndex: "center",
          width: "25ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
        variant="outlined"
      >
        <InputLabel>Role</InputLabel>
        <OutlinedInput
          type="e-mail"
          label="First Name"
          onChange={(e) => setRole(e.target.value)}
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
            uploadImg(e.target.files[0],e), console.log(e.target.files[0]);
          }}
        />
      </Button>

      <Button
        variant="contained"
        component="label"
        id="login"
        sx={{
          m: 1,
          zIndex: "center",
          width: "12ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
        onClick={(e) => {
          {
            handleSubmit(e)
          }
        }}
      >
        Sign up
      </Button>
    </div>
  );
};

export default Formulaire;
