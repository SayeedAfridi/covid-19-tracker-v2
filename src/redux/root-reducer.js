import { combineReducers } from 'redux'
import GlobalDataReducer from './GlobalData/GlobalData.reducer'
import CountryDataReducer from './CountryData/CountryData.reducer'
import DailyDataReducer from './DailyData/DailyData.reducer'
import CountriesReducer from './Countries/Countries.reducer'
const rootReducer = combineReducers({
  globalData: GlobalDataReducer,
  countryData: CountryDataReducer,
  dailyData: DailyDataReducer,
  countries: CountriesReducer,
})

export default rootReducer
