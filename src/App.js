import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { About, News, Dashboard, Bangladesh } from './Pages'
import Navigation from './Navigation/Navigation'
const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/about' component={About} />
        <Route exact path='/news' component={News} />
        <Route exact path='/bd' component={Bangladesh} />
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default App
