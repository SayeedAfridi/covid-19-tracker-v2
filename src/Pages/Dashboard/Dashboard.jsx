import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card } from '@material-ui/core'
import { fetchGlobalDataStartAsync } from '../../redux/GlobalData/GlobalData.actions'
import LeftCards from './LeftCards'
import LineChart from '../../shared/Charts/LineChart/LineChart'
import BarChart from '../../shared/Charts/BarChart/BarChart'
import RightCards from './RightCards'
const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0px 1.5%',
  },
  card: {
    marginBottom: '5px',
  },
  chartCard: {
    marginTop: 20,
    width: '100%',
    padding: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: 300,
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
          <Card className={classes.chartCard} style={{ position: 'relative' }}>
            <LineChart />
          </Card>
          <Card className={classes.chartCard} style={{ position: 'relative' }}>
            <BarChart />
          </Card>
        </Grid>
        <RightCards />
      </Grid>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchGlobalData: () => dispatch(fetchGlobalDataStartAsync()),
})

export default connect(null, mapDispatchToProps)(Dashboard)
