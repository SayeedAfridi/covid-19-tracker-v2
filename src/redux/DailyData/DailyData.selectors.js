import { createSelector } from 'reselect'

const selectDailyDataState = (state) => state.dailyData

export const selectDailyData = createSelector(
  [selectDailyDataState],
  (DailyData) => DailyData.data
)

export const selectIsDDFetching = createSelector(
  [selectDailyDataState],
  (DailyData) => DailyData.isFetching
)

export const isDDLoaded = createSelector(
  [selectDailyDataState],
  (DailyData) => !!DailyData.data
)
