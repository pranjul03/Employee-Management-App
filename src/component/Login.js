import React ,{useState, useEffect ,useContext}  from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import jwt from "jwt-decode";
import Alert from '@mui/material/Alert';
import noteContext from "../context/noteContext"


export default function Login() {

  const a = useContext(noteContext)
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const[Logindata, setLogindata]= useState(null)
   const history= useHistory();

  useEffect(() => {
    if(Logindata!=null){
      console.log(Logindata.Username);
      console.log(Logindata.Password);
      
      axios.post('http://localhost:8080/Login', Logindata)
            .then(response=>{
              if(response.status== 200){
                  var Loginresult=jwt(response.data.token);
                  console.log (response);
                  a.updateLogininfo(Loginresult);
                  localStorage.setItem("auth",response.data.token);
                  history.push("/employee");
                  
              }
              else{
                  
                  console.log(response.data.msg)
                  alert(response.data.msg)
              }
              
              })
             

            
    }
  }, [Logindata])

  const handleOnChangeusername=(event)=>{
      setUsername(event.target.value)
  }
   const handleOnChangepassword=(event)=>{
    setPassword(event.target.value)
  }
  const handleOnClicklogin=()=>{
      setLogindata({
                     Username:Username,
                     Password:Password
                   })
  }



  

   const handlesignupClick=()=>{
     history.push("/signup");
   }


  return (
      <div>
    <div className="main_content">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h4 className="heading">Login To Your Account</h4>
        <TextField id="outlined-basic" label="UserName" variant="outlined" onChange={handleOnChangeusername}/>
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleOnChangepassword}
        />
      </Box>

      <Stack spacing={2} direction="row" className="loginbutton">
        <Button fullWidth={true} variant="contained" onClick={handleOnClicklogin}>
          LOGIN
        </Button>
      </Stack>
      <Stack className="newuser_signup" direction="row" spacing={2}>
        <Button onClick={handlesignupClick}>New Employee ? SIGNUP</Button>
      </Stack>
      <Stack className="admin_login" direction="row" spacing={2}>
        <Button>LOGIN AS ADMIN</Button>
      </Stack>
    </div>
    </div>
  );
}
