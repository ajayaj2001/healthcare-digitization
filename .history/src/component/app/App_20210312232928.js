import './App.scss';

import UserType from "../userType/UserType";
import Login from '../login/Login';
import Register from '../register/Register';
import { Router } from 'react-router';

function App() {
  return (
    <Router>
    <div className="App">
      <UserType />
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
    </Router>
  );
}

export default App;
