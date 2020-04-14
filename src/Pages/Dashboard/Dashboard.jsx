import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, useTheme } from '@material-ui/core'
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
const Dashboard = ({ fetchCountryData }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid
      container
      spacing={2}
      style={{
        background: theme.palette.type === 'light' ? '#fff' : '#3a3a4f',
        minHeight: '90vh'
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

export default Dashboard
