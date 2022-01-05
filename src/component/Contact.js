import React ,{useState, useContext} from 'react'
import noteContext from "../context/noteContext"

export default function Contact() {
    const user_details = useContext(noteContext);
    return (
        <div className="contact_container">
            <div className="contact_header">
            <h2>Contact Information</h2>
            <hr className="weather_line"/>
            </div>
            <div className="contact_center">
             <p className="contact_details"><strong>Contact Number 1: </strong>{user_details.Logininfocontext.contact1}</p>
             <p className="contact_details"><strong>Contact Number 2:</strong> {user_details.Logininfocontext.contact2}</p>
             <p className="contact_details"><strong>Email:</strong> pranjulsrivastava0309@gmail.com</p>
             <p className="contact_details"><strong>Contact Address :</strong> {user_details.Logininfocontext.Address} , {user_details.Logininfocontext.City} </p>
             <p className="contact_details"><strong>Pincode:</strong> 208013</p>
            </div>
            <div className="contact_footer">
            </div>
        </div>
    )
}
