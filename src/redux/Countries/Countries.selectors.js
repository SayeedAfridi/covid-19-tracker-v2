import { createSelector } from 'reselect'

const selectGD = (state) => state.globalData

const selectGDData = createSelector([selectGD], (gd) => gd.data)

const selectGDTable = createSelector([selectGDData], (d) => d && d.table)

const selectCountriesMap = createSelector([selectGDTable], (table) =>
  table ? table.map((el) => el.Country) : []
)
const selectFilteredCountries = createSelector(
  [selectCountriesMap],
  (countries) =>
    countries &&
    countries.filter(
      (c) => c !== 'World' || c !== 'Total:' || c !== 'Bangladesh'
    )
)

export const selectCountries = createSelector(
  [selectFilteredCountries],
  (countries) => countries && countries.sort()
)
