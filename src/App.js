import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Dashboard, Map, News } from './Pages'
import Navigation from './Navigation/Navigation'
import { connect } from 'react-redux'
import { fetchDailyDataStartAsync } from './redux/DailyData/DailyData.actions'
import { fetchCountryDataStartAsync } from './redux/CountryData/CountryData.actions'
import { fetchAllDataStartAsync } from './redux/AllData/AllData.actions'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { fetchGlobalDataStartAsync } from './redux/GlobalData/GlobalData.actions'
import theme, { lightTheme } from './shared/theme'
const App = ({ fetchDailyData, fetchGD, fetchBDData, fetchAll }) => {
  const localTheme = localStorage.getItem('theme')
  const defaultTheme = localTheme === 'light' ? lightTheme : theme
  const [theTheme, setTheme] = useState(defaultTheme)
  const toggleTheme = () => {
    if (theTheme.palette.type === 'light') {
      setTheme(theme)
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme(lightTheme)
      localStorage.setItem('theme', 'light')
    }
  }
  useEffect(() => {
    if (theTheme.palette.type === 'light') {
      document.body.style.backgroundColor = '#FFF'
    } else {
      document.body.style.backgroundColor = '#3A3A4F'
    }
  }, [setTheme, theTheme])
  useEffect(() => {
    fetchGD()
    fetchDailyData()
    fetchAll()
    fetchBDData('Bangladesh')
    //eslint-disable-next-line
  }, [])
  return (
    <MuiThemeProvider theme={theTheme}>
      <Navigation hanldeTheme={toggleTheme} />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/news' component={News} />
        {/* <Route exact path='/about' component={About} />
        <Route exact path='/bd' component={Bangladesh} /> */}
        <Redirect to='/' />
      </Switch>
    </MuiThemeProvider>
  )
}
const mapDispatchToProps = (dispatch) => ({
  fetchGD: () => dispatch(fetchGlobalDataStartAsync()),
  fetchDailyData: () => dispatch(fetchDailyDataStartAsync()),
  fetchBDData: (country) => dispatch(fetchCountryDataStartAsync(country)),
  fetchAll: () => dispatch(fetchAllDataStartAsync()),
})
export default connect(null, mapDispatchToProps)(App)
