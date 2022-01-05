import React, { useState ,useEffect } from "react";
import axios from 'axios';

import { useHistory } from "react-router-dom";

export default function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [Dateofbirth, setDateofbirth] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Nationality, setNationality] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [finalda, setFinalda] = useState(null);

  useEffect(() => {
   if(finalda !== null){
    // console.log(finalda.FirstName);
    // console.log(finalda.LastName);
    // console.log(finalda.Username);
    // console.log(finalda.Password);
    // console.log(finalda.Username);
    // console.log(finalda.Address);
    // console.log(finalda.City);
    // console.log(finalda.State);
    // console.log(finalda.Nationality);
    // console.log(finalda.contact1);
    // console.log(finalda.contact2);
    // console.log(finalda.Email);
    // console.log(finalda.Dateofbirth);

    axios.post('http://localhost:8080/Signup', finalda)
            .then(response => {});

            // history.push("/");
   }

   
  }, [finalda])

  const handleOnChangeFirstname = (event) => {
    setFirstName(event.target.value)
  };
  const handleOnChangeLastname = (event) => {
    setLastName(event.target.value)
  };
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value)
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
  };
  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value)
  };
  const handleOnChangeDateofbirth = (event) => {
    setDateofbirth(event.target.value)
  };
  const handleOnChangeAddress = (event) => {
    setAddress(event.target.value)
  };
  const handleOnChangeCity = (event) => {
    setCity(event.target.value)
  };
  const handleOnChangeState = (event) => {
    setState(event.target.value)
  };
  const handleOnChangeNationality = (event) => {
    setNationality(event.target.value)
  };
  const handleOnChangeContact1 = (event) => {
    setContact1(event.target.value)
  };
  const handleOnChangeContact2 = (event) => {
    setContact2(event.target.value)
     
    
    
  };

const history = useHistory();
  const handleOnClicksignup=()=>{
     setFinalda({
                FirstName :FirstName,
                LastName: LastName,
                Email : Email,
                Password : Password,
                Username: Username,
                Dateofbirth:Dateofbirth,
                Address:Address,
                City: City,
                State: State,
                Nationality: Nationality,
                contact1: contact1,
                contact2: contact2
            })
    
    
    
  }

  

  const handlebacktologinClick = () => {
    history.push("/");
  };
  return (
    <div>
      <form className="row g-3 signupform">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            onChange={handleOnChangeFirstname}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onChange={handleOnChangeLastname}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            aria-label="User name"
            onChange={handleOnChangeUsername}
          />
        </div>
        <div className="col-md-6">
          <input
            type="date"
            className="form-control"
            placeholder="Date of Birth"
            aria-label="Date of Birth"
            onChange={handleOnChangeDateofbirth}
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            id="inputEmail4"
             onChange={handleOnChangeEmail}
          />
        </div>
        <div className="col-md-6">
          <input
            type="password"
            placeholder="password"
            className="form-control"
            id="inputPassword4"
            onChange={handleOnChangePassword}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
             onChange={handleOnChangeAddress}
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="city"
            id="inputCity"
             onChange={handleOnChangeCity}
          />
        </div>
        <div className="col-md-4">
          <select id="inputState1" className="form-select" defaultValue="Kanpur" onChange={handleOnChangeState}>
            <option >Choose state...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-4">
          <select id="inputState2" className="form-select" defaultValue="India" onChange={handleOnChangeNationality}>
            <option >Nationality...</option>
            <option>...</option>
          </select>
        </div>

        <div className="col-6">
          <input
            type="number"
            className="form-control"
            id="contact_number_1"
            placeholder="Contact Number-1"
             onChange={handleOnChangeContact1}
          />
        </div>
        <div className="col-6">
          <input
            type="number"
            className="form-control"
            id="contact_number_2"
            placeholder="Contact Number-2"
             onChange={handleOnChangeContact2}
          />
        </div>

        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={handleOnClicksignup}>
            Sign up
          </button>
          &nbsp;&nbsp;
          <button type="button" onClick={handlebacktologinClick} className="btn btn-primary">
            Back to login
          </button>
        </div>
      </form>
    </div>
  );
}
