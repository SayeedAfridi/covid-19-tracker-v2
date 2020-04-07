import CountryDataActionTypes from './CountryData.types'

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined,
}

const CountryDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryDataActionTypes.FETCH_COUNTRYDATA_START:
      return {
        ...state,
        isFetching: true,
      }

    case CountryDataActionTypes.FETCH_COUNTRYDATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }

    case CountryDataActionTypes.FETCH_COUNTRYDATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default CountryDataReducer
