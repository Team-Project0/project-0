import React from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
 import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const Tabuser = (props) => {
    const [selected, setSelected] = React.useState(false);
    let handleSubmit=(id)=>{ 
      axios.delete(`http://localhost:3000/api/deleteuser/${id}`).then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Activate</TableCell>
            <TableCell align="right">Delete</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {props.data.map((el) => (
          
            <TableRow>
              <TableCell component="th" scope="row">
                {el.iduser}
              </TableCell>
              <TableCell align="right">{el.firstName}</TableCell>
              <TableCell align="right">{el.lastName}</TableCell>
              <TableCell align="right">{el.role}</TableCell>
              <TableCell align="right">{el.userName}</TableCell>
              <TableCell align="right"><ToggleButton
  value="check"
  selected={selected}
  onChange={() => {
    setSelected(!selected);
  }}
>
  <CheckIcon />
</ToggleButton></TableCell>
<TableCell align="right"><IconButton color="primary" aria-label="delete" size="small">
  <DeleteIcon fontSize="small"  onClick={(e)=>{handleSubmit(el.iduser)}}/>
</IconButton></TableCell>







            </TableRow>



          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Tabuser
