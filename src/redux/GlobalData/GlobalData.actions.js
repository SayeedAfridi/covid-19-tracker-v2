import GlobalDataActionTypes from './GlobalData.types'
import { fetchData } from '../../api/itvanilla'
export const fetchGlobalDataStart = () => ({
  type: GlobalDataActionTypes.FETCH_GLOBALDATA_START,
})

export const fetchGlobalDataSuccess = (data) => ({
  type: GlobalDataActionTypes.FETCH_GLOBALDATA_SUCCESS,
  payload: data,
})

export const fetchGlobalDataFailure = (errorMessage) => ({
  type: GlobalDataActionTypes.FETCH_GLOBALDATA_FAILURE,
  payload: errorMessage,
})

export const fetchGlobalDataStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchGlobalDataStart())
    const FetchApi = async () => {
      const data = await fetchData()
      if (data.message) {
        dispatch(fetchGlobalDataFailure(data.message))
      } else {
        dispatch(fetchGlobalDataSuccess(data))
      }
    }
    FetchApi()
  }
}
