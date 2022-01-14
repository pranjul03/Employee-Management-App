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
import Side_nav from "./Side_nav";
import Performance from "./Performance";
import Top_bar from "./Top_bar";
import noteContext from "../context/noteContext";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
import { useHistory } from "react-router-dom";

export default function Employee() {
  const user_details = useContext(noteContext);
  const history=useHistory();

  
  const handleOnClickLogOut=()=>{
    localStorage.removeItem("auth");
    history.push("/")
  }
  
 
  

  return (
    <>
      <div className="right_div_header2">
         <Top_bar/>
      </div>
      <div className="all_content">
        <div className="left_div">
        <Side_nav/>
        </div>
        <div className="right_div">
          <div className="weather">
            <Weather />
          </div>
          <div className="right_div_header">
            <div className="Profile">
              <Profile />
            </div>
            <div className="contact_info">
              <Contact />
            </div>
          </div>
          <div className="right_div_center">
            <div className="leaves">
              <Chart />
            </div>
            <div className="performance">
              <Performance />
            </div>
          </div>
          <div className="right_div_footer"></div>
        </div>
      </div>
    </>
  );
}
