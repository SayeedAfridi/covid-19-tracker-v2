import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card } from '@material-ui/core'
import InfoCard from '../../shared/InfoCard/InfoCard'
const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0px 1.5%',
  },
  card: {
    marginBottom: '5px',
  },
}))
const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid component={Card} elevation={0} item md={3} xs={12} lg={3}>
          <InfoCard
            title='Global'
            color='red'
            infected={50000}
            recovered={50000}
            deaths={3666}
          />
          <InfoCard
            title='Bangladesh'
            color='green'
            infected={50000}
            recovered={50000}
            deaths={3666}
          />
        </Grid>
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

export default Dashboard
