
import './App.css';
import Admin from './components/Admin';
import Login from './components/Login';
import { Switch, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Modal from "./components/Modal";



function App() {
  return (
    <div className='main'>
     <Switch>
        <Route exact path="/">
          <Admin/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
     </Switch>   
    
    
      
    </div>
  );
}
export default App;
