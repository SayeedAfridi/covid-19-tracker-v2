import axios from 'axios'
const url = 'https://api.itvanilla.com/covid19'

export const fetchData = async (country) => {
  try {
    const {
      data: { data },
    } = await axios.get(url)
    if (country) {
      const countryData = data.table[0].filter((el) => el.Country === country)
      return {
        confirmed: parseInt(countryData[0].TotalCases.split(',').join('')),
        deaths: parseInt(countryData[0].TotalDeaths.split(',').join('')),
        recovered: parseInt(countryData[0].TotalRecovered.split(',').join('')),
        newCases: parseInt(countryData[0].NewCases.split(',').join('')) || 0,
        newDeaths: parseInt(countryData[0].NewDeaths.split(',').join('')) || 0,
      }
    }
    const newCases =
      parseInt(data.table[0][0].NewCases.split(',').join('')) || 0
    const newDeaths =
      parseInt(data.table[0][0].NewDeaths.split(',').join('')) || 0

    const newData = {
      confirmed: data.cases,
      deaths: data.deaths,
      recovered: data.recovered,
      lastUpdate: Date.now(),
      flag: data.flag,
      newCases,
      newDeaths,
      table: data.table && data.table[0],
    }
    return newData
  } catch (err) {
    return err
  }
}

export const fetchAllData = async () => {
  try {
    const b_url = 'https://corona.lmao.ninja/v2/countries'
    const { data = [] } = await axios.get(b_url)
    return data
  } catch (err) {
    return err
  }
}
