import { useState, useContext } from "react";
import * as React from "react";
import Side_nav from "./Side_nav";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Weather from "./Weather";
import Contact from "./Contact";
import Chart from "./Chart";
import Performance from "./Performance";
import noteContext from "../context/noteContext";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";


export default function Employee_update() {
const user_details = useContext(noteContext);
  const history = useHistory();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, "abcdefghijkl"),
    createData("Ice cream sandwich", 237, 9.0, 37, "abcdefghijkl"),
    createData("Eclair", 262, 16.0, 24, "abcdefghijkl"),
    createData("Cupcake", 305, 3.7, 67, "abcdefghijkl"),
    createData("Gingerbread", 356, 16.0, 49, "abcdefghijkl"),
    
  ];

  const handleOnClickLogOut = () => {
    localStorage.removeItem("auth");
    history.push("/");
  };



  const handleOnkeyup=(event)=>{
      if(event.target.value.length>=2) {
       rows.filter(ele=>{
           var na=ele.name.toLowerCase();
          
           if(na.indexOf(event.target.value.toLowerCase())!=-1){
               console.log(na);
           }
       })
      }
  }


    return (
        <>
           <div className="right_div_header2">
        <p className="company_name">Company</p>

        <div className="logout_button">
          <Button
            onClick={handleOnClickLogOut}
            variant="contained"
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="all_content">
        <div className="left_div">
          <Side_nav/>
        </div>
        <div className="right_div_employee_table">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onKeyUp={handleOnkeyup} />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email&nbsp;(g)</TableCell>
                  <TableCell align="right">Contact&nbsp;(g)</TableCell>
                  <TableCell align="right">Address&nbsp;(g)</TableCell>
                  <TableCell align="right">Date of Birth&nbsp;(g)</TableCell>
                  <TableCell align="right">Reporting Manager&nbsp;(g)</TableCell>
                  <TableCell align="right">Department&nbsp;(g)</TableCell>
                  <TableCell align="right">Employee code&nbsp;(g)</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right"><input type="text"/></TableCell>
                    <TableCell align="right"><input type="text"/></TableCell>
                    <TableCell align="right"><input type="text"/></TableCell>
                    <TableCell align="right"><input type="text"/></TableCell>
                    <TableCell align="right"><input type="text"/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
            
        </>
    );
}
