import React from 'react'

const Router = () => {
    return (
        <div>
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    )
}

export default Router
