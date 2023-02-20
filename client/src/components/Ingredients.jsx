import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useState } from "react";
import moment from 'moment/moment';

const Ingredients = ({ data,show,setShow }) => {

  const deleted = () => {
    axios
      .delete(`http://localhost:3000/api/delete/${data[0].idingredient}`)
      .then((res) => {
       
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <TableContainer sx={{width:"73%",padding:" 0px 31px",
    margin:" 85px 163px"}} component={Paper}>
        <Table sx={{ minWidth:"79%",margin:" 12px 0px",
    padding: "27px 3px"}} aria-label="customized table">
          <TableHead>
            <TableRow>
            
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Edate</TableCell>
              <TableCell align="center">image</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow>
                
                <TableCell align="center">{el.name}</TableCell>
                <TableCell align="center">{el.quantity}</TableCell>
                <TableCell align="center">{el.price}</TableCell>
                <TableCell align="center">  {moment(el.edate).fromNow() }</TableCell>
                <TableCell align="center">
                  <img className="imgtab" src={el.image} />
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label="delete" size="small">
                    <DeleteIcon
                      fontSize="small"
                      onClick={() => {
                        deleted();
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Ingredients;
