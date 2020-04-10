import AllDataActionTypes from './AllData.types'
import { fetchAllData } from '../../api/itvanilla'

export const fetchAllDataStart = () => ({
  type: AllDataActionTypes.FETCH_ALL_DATA_START,
})

export const fetchAllDataSuccess = (data) => ({
  type: AllDataActionTypes.FETCH_ALL_DATA_SUCCESS,
  payload: data,
})

export const fetchAllDataFailure = (errorMessage) => ({
  type: AllDataActionTypes.FETCH_ALL_DATA_FAILURE,
  payload: errorMessage,
})

export const fetchAllDataStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchAllDataStart())
    const FetchApi = async () => {
      const data = await fetchAllData()
      if (data && data.message) {
        dispatch(fetchAllDataFailure(data.message))
      } else {
        dispatch(fetchAllDataSuccess(data))
      }
    }
    FetchApi()
  }
}
