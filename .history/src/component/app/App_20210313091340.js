import './App.scss';

import UserType from "../userType/UserType";
import Login from '../login/Login';
import Register from '../register/Register';
import NavRouter from '../navRouter/NavRouter'
import { BrowserRouter as Router,Route } from 'react-router-dom';

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
      <UserType />
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <NavRouter/> */}
    </div>
    </Router>
  );
}

export default App;
