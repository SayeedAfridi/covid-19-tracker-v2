import { createSelector } from 'reselect'

const selectAllDataState = (state) => state.allData

export const selectAllData = createSelector(
  [selectAllDataState],
  (data) => data && data.data
)
export const selectCountries = createSelector([selectAllData], (data) =>
  data ? data.map((el) => el.country).sort() : []
)
export const selectCountry = (country) =>
  createSelector([selectAllData], (allData) => {
    const data = allData ? allData.filter((el) => el.country === country) : []
    return {
      confirmed: data.cases,
      deaths: data.deaths,
      recovered: data.recovered,
      active: data.active,
      critical: data.critical,
      tests: data.tests,
      newCases: data.todayCases,
      newDeaths: data.todayDeaths,
      countryInfo: data.countryInfo,
      lastUpdate: data.updated,
    }
  })

export const selectIsADFetching = createSelector(
  [selectAllDataState],
  (allData) => allData.isFetching
)

export const isADLoaded = createSelector(
  [selectAllDataState],
  (allData) => !!allData.data
)
