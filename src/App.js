import logo from './logo.svg';
import './App.css';
import Login from './component/Login'
import Signup from './component/Signup'
import Employee from './component/Employee'
import Profile from './component/Profile'
import Weather from './component/Weather'
import Chart from './component/Chart'
import Contact from './component/Contact'
import Performance from './component/Performance'
import Empheader from './component/Empheader'
import Employee_table from './component/Employee_table'
import Employee_update from './component/Employee_update'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NoteState from "./context/NoteState";

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Switch>
        <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/employee">
            <Employee/>
          </Route>
          <Route exact path="/employee_table">
            <Employee_table/>
          </Route> 
           <Route exact path="/employee_update">
            <Employee_update/>
          </Route>
      </Switch>
    </Router>
    </NoteState>
     {/* <Employee/> 
     <Login/> */}
      {/* <NoteState>
    <Contact/>
     </NoteState> */}
     {/* <Chart/> */}
    {/* <Performance/> */}
    {/* <Empheader/> */}
     {/* <Signup/> */}
     {/* <Employee_table/> */}
    </>
  );
}

export default App;
