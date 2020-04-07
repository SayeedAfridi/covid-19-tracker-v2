import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained'
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import CountUp from 'react-countup'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 8,
    transition: '0.3s',
    width: '95%',
    overflow: 'initial',
    background: '#ffffff',
  },
  content: {
    textAlign: 'left',
    overflowX: 'auto',
  },
}))

const InfoCard = ({ title, color, data, loading, loaded }) => {
  const classes = useStyles()
  const cardHeaderStyles = useContainedCardHeaderStyles()
  const cardShadowStyles = useSoftRiseShadowStyles({
    inactive: true,
  })
  return (
    <Card
      elevation={0}
      className={cx(classes.card, cardShadowStyles.root)}
      style={{ position: 'relative' }}
    >
      <CardHeader
        classes={cardHeaderStyles}
        title={title}
        style={{
          background: color,
          width: '70%',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          position: 'absolute',
        }}
        subheader={
          loading || !loaded ? (
            <Skeleton />
          ) : (
            new Date(data.lastUpdate).toDateString()
          )
        }
      />
      <CardContent className={classes.content}>
        <Table style={{ marginTop: 50 }}>
          <TableBody>
            <TableRow style={{ borderLeft: '5px solid blue' }}>
              <TableCell>Infected</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='80px' />
                ) : (
                  <CountUp
                    start={0}
                    end={data.confirmed.value}
                    duration={2.5}
                    separator=','
                  />
                )}
              </TableCell>
            </TableRow>
            <TableRow style={{ borderLeft: '5px solid green' }}>
              <TableCell>Recovered</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='80px' />
                ) : (
                  <CountUp
                    start={0}
                    end={data.recovered.value}
                    duration={2.5}
                    separator=','
                  />
                )}
              </TableCell>
            </TableRow>
            <TableRow
              style={{
                borderLeft: '5px solid red',
                marginTop: '1px',
              }}
            >
              <TableCell>Deaths</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='80px' />
                ) : (
                  <CountUp
                    start={0}
                    end={data.deaths.value}
                    duration={2.5}
                    separator=','
                  />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default InfoCard
