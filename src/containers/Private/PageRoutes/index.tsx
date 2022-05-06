import React from 'react'
import { observer } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
// import Main from '../Main'
import Home from '../Home'
import Weather from '../Weather/index'

const PrivatePages: React.FC = observer(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/weather" component={Weather} />
      {/* <Route exact path="/" component={Main} /> */}
      {/* <Redirect from="/" to={} /> */}
    </Switch>
  )
})

export default PrivatePages
