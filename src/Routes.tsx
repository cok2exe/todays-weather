import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import React from 'react'
import List from './pages/list'
import Detail from './pages/detail'

const Routes: React.FC = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <List />
      </Route>
      <Route exact path="/detail/:id">
        <Detail />
      </Route>
    </Switch>
  </Router>
}

export default Routes