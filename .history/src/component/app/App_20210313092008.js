import './App.scss';

import UserType from "../userType/UserType";
import Login from '../login/Login';
import Register from '../register/Register';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/login">
           <Login/>
          </Route>
          <Route path="/register">
           <Register/>
          </Route>
          <Route path="/">
            <UserType/>
          </Route>
        </Switch>
    <div className="App">
    </div>
    </Router>
  );
}

export default App;
