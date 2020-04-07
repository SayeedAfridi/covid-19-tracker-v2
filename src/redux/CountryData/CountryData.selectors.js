import { createSelector } from 'reselect'

const selectCountryDataState = (state) => state.countryData

export const selectCountryData = createSelector(
  [selectCountryDataState],
  (countryData) => countryData.data
)

export const selectIsCDFetching = createSelector(
  [selectCountryDataState],
  (countryData) => countryData.isFetching
)

export const isCDLoaded = createSelector(
  [selectCountryDataState],
  (countryData) => !!countryData.data
)
