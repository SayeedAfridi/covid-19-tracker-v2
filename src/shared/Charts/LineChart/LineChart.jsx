import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Line } from 'react-chartjs-2'
import {
  selectDailyData,
  selectIsDDFetching,
  isDDLoaded,
} from '../../../redux/DailyData/DailyData.selectors'
import { ZoomLoader } from '../../ZoomLoader/ZoomLoader'
import { Fade } from '@material-ui/core'

const LineChart = ({ dailyData, ddFetching }) => {
  return (
    <>
      <ZoomLoader enter={ddFetching} text='Fetching Data' />
      <Fade in={!ddFetching} mountOnEnter unmountOnExit timeout={300}>
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [
              {
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              },
              {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
            ],
          }}
        />
      </Fade>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  dailyData: selectDailyData,
  ddFetching: selectIsDDFetching,
  ddLoaded: isDDLoaded,
})

export default connect(mapStateToProps)(LineChart)
