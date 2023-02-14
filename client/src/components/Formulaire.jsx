import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";


function Formulaire() {
  return (
    <div id="formulaire">
      <FormControl
        sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
        variant="outlined"
      >
        <InputLabel>E-mail</InputLabel>
        <OutlinedInput type="e-mail" label="E-mail   " />
      </FormControl>
      <FormControl
        sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
        variant="outlined"
      >
        <InputLabel>Password</InputLabel>
        <OutlinedInput type="Password" label="Password" />
      </FormControl>
      <Button id="login">Login</Button>
    </div>
  );
}

export default Formulaire;
