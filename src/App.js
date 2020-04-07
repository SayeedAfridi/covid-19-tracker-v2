import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { About, News, Dashboard, Bangladesh } from './Pages'
import Navigation from './Navigation/Navigation'
import { connect } from 'react-redux'
import { fetchDailyDataStartAsync } from './redux/DailyData/DailyData.actions'
const App = ({ fetchDailyData }) => {
  useEffect(() => {
    fetchDailyData()
  })
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
const mapDispatchToProps = (dispatch) => ({
  fetchDailyData: () => dispatch(fetchDailyDataStartAsync()),
})
export default connect(null, mapDispatchToProps)(App)
