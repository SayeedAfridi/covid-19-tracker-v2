import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let changeAbleUrl = url
  if (country) {
    changeAbleUrl = `${url}/countries/${country}`
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeAbleUrl)
    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    return error
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map((d) => ({
      confirmed: d.confirmed.total,
      deaths: d.deaths.total,
      date: d.reportDate,
    }))
    return modifiedData
  } catch (error) {
    return error
  }
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`)
    return countries.map((c) => c.name)
  } catch (error) {
    return error
  }
}
