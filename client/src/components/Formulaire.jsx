import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';



function Formulaire() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return(

    <div>

   <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
     <OutlinedInput
       id="outlined-adornment-password"
       type={showPassword ? 'text' : 'password'}
      
       label="Password"
     />
   </FormControl>
</div>

  )

}
 

  


export default Formulaire;