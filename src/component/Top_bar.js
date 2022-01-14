import { useState, useContext } from "react";
import * as React from "react";
import noteContext from "../context/noteContext";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";

export default function Top_bar() {

     const user_details = useContext(noteContext);
  const history=useHistory();

  
  const handleOnClickLogOut=()=>{
    localStorage.removeItem("auth");
    history.push("/")
  }
    return (
        <>
            <p className="company_name">Company</p>

        <div className="logout_button">
          <Button onClick={handleOnClickLogOut} variant="contained" endIcon={<LogoutIcon />}>
            Logout
          </Button>
        </div>
        </>
    )
}
