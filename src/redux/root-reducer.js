import { combineReducers } from 'redux'
import GlobalDataReducer from './GlobalData/GlobalData.reducer'
import CountryDataReducer from './CountryData/CountryData.reducer'
import DailyDataReducer from './DailyData/DailyData.reducer'
import AllDataReducer from './AllData/AllData.reducer'
const rootReducer = combineReducers({
  globalData: GlobalDataReducer,
  countryData: CountryDataReducer,
  dailyData: DailyDataReducer,
  allData: AllDataReducer,
})

export default rootReducer
