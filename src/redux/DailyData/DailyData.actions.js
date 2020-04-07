import DailyDataActionTypes from './DailyData.types'
import { fetchDailyData } from '../../api/mathdroAPI'

export const fetchDailyDataStart = () => ({
  type: DailyDataActionTypes.FETCH_DAILYDATA_START,
})

export const fetchDailyDataSuccess = (data) => ({
  type: DailyDataActionTypes.FETCH_DAILYDATA_SUCCESS,
  payload: data,
})

export const fetchDailyDataFailure = (errorMessage) => ({
  type: DailyDataActionTypes.FETCH_DAILYDATA_FAILURE,
  payload: errorMessage,
})

export const fetchDailyDataStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchDailyDataStart())
    const FetchApi = async () => {
      const data = await fetchDailyData()
      if (data.message) {
        dispatch(fetchDailyDataFailure(data.message))
      } else {
        dispatch(fetchDailyDataSuccess(data))
      }
    }
    FetchApi()
  }
}
