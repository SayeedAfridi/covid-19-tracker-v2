import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableBody,
  CardContent,
  CardHeader,
  useTheme,
} from '@material-ui/core'
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained'
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import CountUp from 'react-countup'
import { Skeleton } from '@material-ui/lab'
import { red, blue, green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => {
  return {
    card: {
      marginTop: 40,
      marginBottom: 10,
      borderRadius: 8,
      transition: '0.3s',
      width: '100%',
      overflow: 'initial',
    },
    content: {
      textAlign: 'left',
      overflowX: 'auto',
    },
  }
})

const InfoCard = ({ title, color, data, loading, loaded }) => {
  const classes = useStyles()
  const cardHeaderStyles = useContainedCardHeaderStyles()
  const cardShadowStyles = useSoftRiseShadowStyles({
    inactive: true,
  })
  const theme = useTheme()
  let matColor = theme.palette.primary.main
  if (theme.palette.type === 'light') {
    switch (color) {
      case 'red':
        matColor = red[500]
        break
      case 'green':
        matColor = green[500]
        break
      case 'blue':
        matColor = blue[500]
        break
      default:
        matColor = theme.palette.primary.main
        break
    }
  }
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
          background: matColor,
          width: '70%',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          position: 'absolute',
        }}
        subheader={title === 'Global' && new Date(Date.now()).toDateString()}
      />
      <CardContent className={classes.content}>
        <Table style={{ marginTop: 50 }}>
          <TableBody>
            <TableRow style={{ borderLeft: `5px solid ${blue[400]}` }}>
              <TableCell>Infected</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='60px' />
                ) : (
                  <CountUp
                    start={0}
                    end={data.confirmed}
                    duration={2.5}
                    separator=','
                  />
                )}
              </TableCell>
            </TableRow>
            <TableRow style={{ borderLeft: `5px solid ${blue[900]}` }}>
              <TableCell>New Infected</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='60px' />
                ) : (
                  <>
                    +
                    <CountUp
                      start={0}
                      end={data.newCases}
                      duration={2.5}
                      separator=','
                    />
                  </>
                )}
              </TableCell>
            </TableRow>
            <TableRow style={{ borderLeft: `5px solid ${green[500]}` }}>
              <TableCell>Recovered</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='60px' />
                ) : (
                  <CountUp
                    start={0}
                    end={data.recovered}
                    duration={2.5}
                    separator=','
                  />
                )}
              </TableCell>
            </TableRow>
            <TableRow
              style={{
                borderLeft: `5px solid ${red[500]}`,
                marginTop: '1px',
              }}
            >
              <TableCell>Deaths</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='60px' />
                ) : (
                  <CountUp
                    start={0}
                    end={data.deaths}
                    duration={2.5}
                    separator=','
                  />
                )}
              </TableCell>
            </TableRow>
            <TableRow style={{ borderLeft: `5px solid ${red[900]}` }}>
              <TableCell>New Deaths</TableCell>
              <TableCell align='right'>
                {loading || !loaded ? (
                  <Skeleton animation='pulse' width='60px' />
                ) : (
                  <>
                    +
                    <CountUp
                      start={0}
                      end={data.newDeaths}
                      duration={2.5}
                      separator=','
                    />
                  </>
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
