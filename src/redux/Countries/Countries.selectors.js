import { createSelector } from 'reselect'

const selectCountriesState = (state) => state.countries

export const selectCountries = createSelector(
  [selectCountriesState],
  (countries) => countries.data
)

export const selectIsCountriesFetching = createSelector(
  [selectCountriesState],
  (countries) => countries.isFetching
)

export const isCountriesLoaded = createSelector(
  [selectCountriesState],
  (countries) => !!countries.data
)
