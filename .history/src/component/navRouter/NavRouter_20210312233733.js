import React from 'react'

import Login from '../login/Login';
import Register from '../register/Register';
import UserType from '../userType/UserType'

const Router = () => {
    return (
        <div>
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
        </div>
    )
}

export default Router
