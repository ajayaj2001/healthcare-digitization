import './App.scss';

import UserType from "../userType/UserType";
import Login from '../login/Login';
import Register from '../register/Register';
import NavRouter from '../navRouter/NavRouter'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <UserType />
      {/* <Login/> */}
      {/* <Register/> */}
      <NavRouter/>
    </div>
    </Router>
  );
}

export default App;
