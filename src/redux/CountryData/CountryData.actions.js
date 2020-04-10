import CountryDataActionTypes from './CountryData.types'
import { fetchData } from '../../api/itvanilla'

export const fetchCountryDataStart = () => ({
  type: CountryDataActionTypes.FETCH_COUNTRYDATA_START,
})

export const fetchCountryDataSuccess = (data) => ({
  type: CountryDataActionTypes.FETCH_COUNTRYDATA_SUCCESS,
  payload: data,
})

export const fetchCountryDataFailure = (errorMessage) => ({
  type: CountryDataActionTypes.FETCH_COUNTRYDATA_FAILURE,
  payload: errorMessage,
})

export const fetchCountryDataStartAsync = (country) => {
  return (dispatch) => {
    dispatch(fetchCountryDataStart())
    const FetchApi = async () => {
      const data = await fetchData(country)
      if (data.message) {
        dispatch(fetchCountryDataFailure(data.message))
      } else {
        const newData = { ...data, country }
        dispatch(fetchCountryDataSuccess(newData))
      }
    }
    FetchApi()
  }
}
