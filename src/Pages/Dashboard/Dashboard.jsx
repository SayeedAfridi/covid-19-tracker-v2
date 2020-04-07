import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card } from '@material-ui/core'
import { fetchGlobalDataStartAsync } from '../../redux/GlobalData/GlobalData.actions'
import LeftCards from './LeftCards'
import { fetchCountryDataStartAsync } from '../../redux/CountryData/CountryData.actions'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0px 1.5%',
  },
  card: {
    marginBottom: '5px',
  },
}))
const Dashboard = ({ fetchGlobalData, fetchCountryData }) => {
  const classes = useStyles()

  useEffect(() => {
    fetchGlobalData()
    //eslint-disable-next-line
  }, [])
  //const {confirmed, recovered, deaths, lastupdate} = globalData
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <LeftCards fetchCountry={fetchCountryData} />
        <Grid item md={6} xs={12} lg={6}>
          <Card>
            hello <br />
            hello <br />
            hello <br />
            hello <br />
          </Card>
          <Card>
            hello <br />
            hello <br />
            hello <br />
            hello <br />
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card>
            hello <br />
            hello <br />
            hello <br />
            hello <br />
          </Card>
          <Card>
            hello <br />
            hello <br />
            hello <br />
            hello <br />
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchGlobalData: () => dispatch(fetchGlobalDataStartAsync()),
  fetchCountryData: (country) => dispatch(fetchCountryDataStartAsync(country)),
})

export default connect(null, mapDispatchToProps)(Dashboard)
