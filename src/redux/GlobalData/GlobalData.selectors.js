import { createSelector } from 'reselect'

const selectGlobalDataState = (state) => state.globalData

export const selectGlobalData = createSelector(
  [selectGlobalDataState],
  (data) => data && data.data
)

export const selectIsGDFetching = createSelector(
  [selectGlobalDataState],
  (globalData) => globalData.isFetching
)

export const isGDLoaded = createSelector(
  [selectGlobalDataState],
  (globalData) => !!globalData.data
)
