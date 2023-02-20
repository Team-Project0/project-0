import React,{useState,useEffect} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {  CardActionArea, CardActions } from '@mui/material';
import { deepPurple } from "@mui/material/colors";
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
const NotificationChef = () => {
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
   

    const handleSubmit=()=>{
      axios.post("http://localhost:3000/api/sendNotification",{message,date}).then(
      (res)=>{console.log(res)})
      .catch((err)=>{console.log(err)})   
  }
  return (
    <div >
          <div  className="grid-container12">
       
        <Card sx={{ maxWidth: 345,marginTop: 20,
              marginLeft:19,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor:"background.default",
              borderRadius: 1,
              padding: 4,
              boxShadow:4,
              }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="70%"
          margin="0px 26px"
          image="https://i.pinimg.com/564x/c4/6c/df/c46cdf93bcf5f19f11c05a0ae80a8aac.jpg"
          alt="green iguana"
        />
        <CardContent>
          <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
              <InputLabel>date</InputLabel>
              <OutlinedInput type="text" label="eday" onChange={(e)=>setDate(e.target.value)} />
            </FormControl>
         <FormControl
              sx={{ m: 1, zIndex: "center", width: "25ch", position: "center" }}
              variant="outlined"
            >
                <TextField
          id="outlined-multiline-flexible"
          label="Message.."
          multiline
          maxRows={4}
          onChange={(e)=>setMessage(e.target.value)}
        />
               
            </FormControl>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      
           <Stack direction="row" spacing={2}>
     
     <Button sx={{bgcolor: deepPurple[400] ,
     "&:hover": {
                  backgroundColor: "#3a2774",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
                borderRadius: 1,
                color: "#fff",
                mt:1,
                ml:2,}}
     variant="contained" onClick={()=>handleSubmit()} startIcon={<SendIcon /> }>
       Send
     </Button>
   </Stack>
        
      </CardActions>
    
    </Card>
    <img className='imgcow' src="https://www.milka.it/-/media/Project/Brands/Milka/it/Home-Page/lilac-heritage-DESK.png?h=599&w=893&hash=615C3CF7581F64324C02A737405CCC47"/>
    
    </div></div>
  )
}

export default NotificationChef
