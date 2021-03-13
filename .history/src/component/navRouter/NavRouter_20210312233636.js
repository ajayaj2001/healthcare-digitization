import React from 'react'

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
