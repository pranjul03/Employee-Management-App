import React ,{useContext} from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import noteContext from "../context/noteContext"

export default function Profile() {
    const user_details_profile = useContext(noteContext);
    return (
        <div>
            <div className="Profile_header">
                <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/richarde8624aa.jpg"
              sx={{ width: 80, height: 80 , marginTop:2 ,marginLeft: 2 }}
            />
          </Stack>
                <div>
                   <p style={{marginTop:25 , marginLeft:10 }}>{user_details_profile.Logininfocontext.FirstName}</p>
                   <p style={{marginTop:2 , marginLeft:10}} >Email</p>
                </div>
            </div>
            <hr/>
            <div className="Profile_footer">
            <p style={{marginLeft:10}}> Code: </p>
            <p style={{marginLeft:10}}>Number: {user_details_profile.Logininfocontext.contact1}</p>
            <p style={{marginLeft:10}}>Reporting Manager:</p>
            <p style={{ marginLeft:10}}>Department : </p>
            </div> 
        </div>
    )
}
