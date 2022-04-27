import React from 'react'
import { observer } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
// import Main from '../Main'
import Home from "../Home";

const PrivatePages: React.FC = observer(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* The git repository at '/Users/macbook' has too many active changes, only a subset of Git features will be enabled. */}
      {/* <Route exact path="/" component={Main} /> */}
      {/* <Redirect from="/" to={} /> */}
    </Switch>
  )
})

export default PrivatePages
