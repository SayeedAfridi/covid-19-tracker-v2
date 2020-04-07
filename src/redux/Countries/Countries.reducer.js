import CountriesActionTypes from './Countries.types'

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMessage: undefined,
}

const CountriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountriesActionTypes.FETCH_COUNTRIES_START:
      return {
        ...state,
        isFetching: true,
      }

    case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }

    case CountriesActionTypes.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default CountriesReducer
