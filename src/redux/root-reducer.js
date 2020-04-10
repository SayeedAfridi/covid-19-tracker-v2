import { combineReducers } from 'redux'
import GlobalDataReducer from './GlobalData/GlobalData.reducer'
import CountryDataReducer from './CountryData/CountryData.reducer'
import DailyDataReducer from './DailyData/DailyData.reducer'
const rootReducer = combineReducers({
  globalData: GlobalDataReducer,
  countryData: CountryDataReducer,
  dailyData: DailyDataReducer,
})

export default rootReducer
