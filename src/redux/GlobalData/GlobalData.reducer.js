import GlobalDataActionTypes from './GlobalData.types'

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined,
}

const GlobalDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GlobalDataActionTypes.FETCH_GLOBALDATA_START:
      return {
        ...state,
        isFetching: true,
      }

    case GlobalDataActionTypes.FETCH_GLOBALDATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }

    case GlobalDataActionTypes.FETCH_GLOBALDATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default GlobalDataReducer
