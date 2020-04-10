import AllDataActionTypes from './AllData.types'

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined,
}

const AllDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AllDataActionTypes.FETCH_ALL_DATA_START:
      return {
        ...state,
        isFetching: true,
      }

    case AllDataActionTypes.FETCH_ALL_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }

    case AllDataActionTypes.FETCH_ALL_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default AllDataReducer
