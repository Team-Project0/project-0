import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Formulaire = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [photoProfil, setPhotoProfil] = useState("");
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const handleSubmit = () => {
    console.log(title);
    axios
      .post(`http://localhost:3000/api/milka/signUp`, {
        lastName: lastName,
        firstName: firstName,
        password: password,
        photoProfil: photoProfil,
        role: role,
        userName: userName,
      })
      .then((res) => {
        console.log(res);
        setData(res);
      }).catch = (err) => {
      console.log(err);
    };
  };
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
        <InputLabel>First Name</InputLabel>
        <OutlinedInput type="text" label="First Name" onChange={(e)=>setFirstName(e.target.value)} />
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
        <OutlinedInput type="text" label="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
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
        <OutlinedInput type="Password" label="Password" onChange={(e)=>setPassword(e.target.value)} />
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
        <OutlinedInput type="text" label="First Name" onChange={(e)=>setUserName(e.target.value)} />
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
        <OutlinedInput type="e-mail" label="First Name" onChange={(e)=>setRole(e.target.value)} />
      </FormControl>
      <Button
        variant="contained"
        component="label"
        sx={{
          m: 1,
          zIndex: "center",
          width: "25ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
      >
        Photo
        <input hidden accept="image/*" multiple type="file" onChange={(e)=>setPhotoProfil(e.target.value)} />
      </Button>

      <Button
        id="login"
        sx={{
          m: 1,
          zIndex: "center",
          width: "10ch",
          position: "center",
          boxShadow: 3,
          display: "grid",
        }}
        onClick={()=>handleSubmit()}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Formulaire;
