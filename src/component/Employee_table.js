import { useState, useContext } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
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

export default function Employee_table() {
  const [iconcolor1, setIconcolor1] = useState("grey");
  const [iconcolor2, setIconcolor2] = useState("grey");
  const [iconcolor3, setIconcolor3] = useState("grey");
  const [iconcolor4, setIconcolor4] = useState("grey");
  const [iconcolor5, setIconcolor5] = useState("grey");
  const [iconcolor6, setIconcolor6] = useState("grey");
  const [iconcolor7, setIconcolor7] = useState("grey");
  const [iconcolor8, setIconcolor8] = useState("grey");
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

  const onmouseenter1 = () => {
    setIconcolor1("white");
  };
  const onmouseleave1 = () => {
    setIconcolor1("grey");
  };

  const onmouseenter2 = () => {
    setIconcolor2("white");
  };
  const onmouseleave2 = () => {
    setIconcolor2("grey");
  };
  const onmouseenter3 = () => {
    setIconcolor3("white");
  };
  const onmouseleave3 = () => {
    setIconcolor3("grey");
  };
  const onmouseenter4 = () => {
    setIconcolor4("white");
  };
  const onmouseleave4 = () => {
    setIconcolor4("grey");
  };
  const onmouseenter5 = () => {
    setIconcolor5("white");
  };
  const onmouseleave5 = () => {
    setIconcolor5("grey");
  };
  const onmouseenter6 = () => {
    setIconcolor6("white");
  };
  const onmouseleave6 = () => {
    setIconcolor6("grey");
  };
  const onmouseenter7 = () => {
    setIconcolor7("white");
  };
  const onmouseleave7 = () => {
    setIconcolor7("grey");
  };
  const onmouseenter8 = () => {
    setIconcolor8("white");
  };
  const onmouseleave8 = () => {
    setIconcolor8("grey");
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
          <div className="employee_left_header">
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/richarde8624aa.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <p style={{ marginTop: 18 }}>
                {/* {user_details.Logininfocontext.FirstName} */}
              </p>
            </Stack>
          </div>
          <Box
            className="employee_left_main"
            sx={{ width: "100%", maxWidth: 360 }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem
                  className="list1"
                  onMouseEnter={onmouseenter1}
                  onMouseLeave={onmouseleave1}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon style={{ color: iconcolor1 }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className="list2"
                  disablePadding
                  onMouseEnter={onmouseenter2}
                  onMouseLeave={onmouseleave2}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon style={{ color: iconcolor2 }} />
                    </ListItemIcon>
                    <ListItemText primary="Full Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className="list3"
                  disablePadding
                  onMouseEnter={onmouseenter3}
                  onMouseLeave={onmouseleave3}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon style={{ color: iconcolor3 }} />
                    </ListItemIcon>
                    <ListItemText primary="Tickets" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className="list4"
                  disablePadding
                  onMouseEnter={onmouseenter4}
                  onMouseLeave={onmouseleave4}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon style={{ color: iconcolor4 }} />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className="list5"
                  disablePadding
                  onMouseEnter={onmouseenter5}
                  onMouseLeave={onmouseleave5}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon style={{ color: iconcolor5 }} />
                    </ListItemIcon>
                    <ListItemText primary="Payroll" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className="list6"
                  disablePadding
                  onMouseEnter={onmouseenter6}
                  onMouseLeave={onmouseleave6}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon style={{ color: iconcolor6 }} />
                    </ListItemIcon>
                    <ListItemText primary="Policies" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className="list7"
                  disablePadding
                  onMouseEnter={onmouseenter7}
                  onMouseLeave={onmouseleave7}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon style={{ color: iconcolor7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  className="list8"
                  disablePadding
                  onMouseEnter={onmouseenter8}
                  onMouseLeave={onmouseleave8}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon style={{ color: iconcolor8 }} />
                    </ListItemIcon>
                    <ListItemText primary="Performance" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
        <div className="right_div_employee_table">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onKeyUp={handleOnkeyup} />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
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