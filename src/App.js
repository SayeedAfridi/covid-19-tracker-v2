import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { About, News, Dashboard, Bangladesh } from './Pages'
import Navigation from './Navigation/Navigation'
import { connect } from 'react-redux'
import { fetchDailyDataStartAsync } from './redux/DailyData/DailyData.actions'
import { fetchCountryDataStartAsync } from './redux/CountryData/CountryData.actions'
const App = ({ fetchDailyData, fetchBDData }) => {
  useEffect(() => {
    fetchDailyData()
    fetchBDData('Bangladesh')
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
  fetchBDData: (country) => dispatch(fetchCountryDataStartAsync(country)),
})
export default connect(null, mapDispatchToProps)(App)
