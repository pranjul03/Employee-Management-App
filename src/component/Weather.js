import React,{useState, useEffect , useContext} from 'react'
import axios from "axios"
import noteContext from "../context/noteContext"

export default function Weather() {
    const user_details = useContext(noteContext);
    const [Weather_data, setWeather_data] = useState(null)
    const today = new Date();
    const month= today.toLocaleString('default', { month: 'short' });
    const [temp, settemp] = useState("");
    const [condn, setcondn] = useState("");
    const[icon, seticon]= useState("")


    useEffect(() => {
        if(Weather_data !== null){
            console.log(Weather_data);
            settemp(Weather_data.current.temp_c);
            setcondn(Weather_data.current.condition.text);
            seticon(Weather_data.current.condition.icon);
        }
    }, [Weather_data])

    useEffect(() => {
        axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=dff6bbc48f854e62a8d142358220301&q=kanpur&aqi=no"
      )
      .then((res) => {
        
        setWeather_data(res.data);
        
      });
    }, [])

    return (
        <div className="weather_container">
           
            <div className="left_weather">
              <p1>Hello {user_details.Logininfocontext.FirstName} {user_details.Logininfocontext.LastName}</p1><br/>
              <p1>{user_details.Logininfocontext.City} , {user_details.Logininfocontext.State}</p1><br/><br/>
              <p2>{today.getDate()}  </p2> Feb , Thu
            </div>
            <div className="right_weather">
            <br/><br/>
               <p3>{temp}&#176; C</p3><br/>
                <p4>{condn}</p4>
               

            </div>
            <div className="extreme_right">
            <img src={icon} width="200" height="200" className="weather_img"/>
            </div>
        </div>
    )
}
