
import './App.css';

import { Switch, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Modal from "./components/Modal";
import DateDrop from "./components/DateDrop";
import ContactDrop from './components/ContactDrop';
import Loginpage from './components/Loginpage';
import Adminpage from './components/Adminpage';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Loginpage/>
        </Route>
        <Route exact path="/login">
          <Adminpage/>
        </Route>
     </Switch>     

    
      
    </div>
  );
}
export default App;
