import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, useTheme } from '@material-ui/core'
import { fetchGlobalDataStartAsync } from '../../redux/GlobalData/GlobalData.actions'
import LeftCards from './LeftCards'
import LineChart from '../../shared/Charts/LineChart/LineChart'
import BarChart from '../../shared/Charts/BarChart/BarChart'
import RightCards from './RightCards'
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
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
  const theme = useTheme()

  useEffect(() => {
    fetchGlobalData()
    //eslint-disable-next-line
  }, [])
  return (
    <Grid
      container
      spacing={2}
      style={{
        background: theme.palette.type === 'light' ? '#fff' : '#3a3a4f',
      }}
    >
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
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchGlobalData: () => dispatch(fetchGlobalDataStartAsync()),
})

export default connect(null, mapDispatchToProps)(Dashboard)
