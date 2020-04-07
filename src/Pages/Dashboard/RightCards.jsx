import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card } from '@material-ui/core'
import CountryPicker from './CountryPicker'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCountryData,
  isCDLoaded,
  selectIsCDFetching,
} from '../../redux/CountryData/CountryData.selectors'
import { fetchCountryDataStartAsync } from '../../redux/CountryData/CountryData.actions'
import InfoCard from '../../shared/InfoCard/InfoCard'
const useStyles = makeStyles((theme) => ({
  pickerCard: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
}))

const RightCards = ({ countryData, loaded, loading, fetchCountryData }) => {
  const classes = useStyles()
  const handleChange = (country) => {
    fetchCountryData(country)
  }
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Card className={classes.pickerCard}>
        <CountryPicker handleCountryChange={handleChange} />
      </Card>
      <InfoCard
        title={loaded ? countryData.country : 'Bangladesh'}
        color='blue'
        data={countryData}
        loading={loading}
        loaded={loaded}
      />
    </Grid>
  )
}
const mapStateToProps = createStructuredSelector({
  countryData: selectCountryData,
  loading: selectIsCDFetching,
  loaded: isCDLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCountryData: (country) => dispatch(fetchCountryDataStartAsync(country)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RightCards)
