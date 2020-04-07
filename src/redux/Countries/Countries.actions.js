import CountriesActionTypes from './Countries.types'
import { fetchCountries } from '../../api/mathdroAPI'

export const fetchCountriesStart = () => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_START,
})

export const fetchCountriesSuccess = (data) => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS,
  payload: data,
})

export const fetchCountriesFailure = (errorMessage) => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_FAILURE,
  payload: errorMessage,
})

export const fetchCountriesStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCountriesStart())
    const FetchApi = async () => {
      const data = await fetchCountries()
      if (data.message) {
        dispatch(fetchCountriesFailure(data.message))
      } else {
        const newData = data.filter((d) => d !== 'Bangladesh')
        dispatch(fetchCountriesSuccess(newData))
      }
    }
    FetchApi()
  }
}
