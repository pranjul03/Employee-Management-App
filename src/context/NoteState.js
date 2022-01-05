import react ,{useState} from "react"
import noteContext from "./noteContext"

const NoteState=(props)=>{

  const [Logininfocontext,setLogininfocontext] = useState(null)

  const updateLogininfo=(info)=>{
     setLogininfocontext({
                FirstName :info.FirstName,
                LastName: info.LastName,
                Email : info.Email,
                Password : info.Password,
                Username: info.Username,
                Dateofbirth:info.Dateofbirth,
                Address:info.Address,
                City: info.City,
                State: info.State,
                Nationality: info.Nationality,
                contact1: info.contact1,
                contact2: info.contact2
     })
  }
    return(

        <noteContext.Provider  value={{Logininfocontext, updateLogininfo}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;