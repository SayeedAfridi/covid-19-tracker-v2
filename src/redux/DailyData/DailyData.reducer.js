import DailyDataActionTypes from './DailyData.types'

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMessage: undefined,
}

const DailyDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DailyDataActionTypes.FETCH_DAILYDATA_START:
      return {
        ...state,
        isFetching: true,
      }

    case DailyDataActionTypes.FETCH_DAILYDATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }

    case DailyDataActionTypes.FETCH_DAILYDATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default DailyDataReducer
