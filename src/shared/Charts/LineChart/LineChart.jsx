import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Line } from 'react-chartjs-2'
import {
  selectDailyData,
  selectIsDDFetching,
  isDDLoaded,
} from '../../../redux/DailyData/DailyData.selectors'
import Loader from '../../loader/loader'
import FadeElement from '../../FadeElement/FadeElement'

const LineChart = ({ dailyData, ddFetching }) => {
  return (
    <>
      {ddFetching && <Loader text='fetching data' />}
      <FadeElement enter={!ddFetching}>
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
      </FadeElement>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  dailyData: selectDailyData,
  ddFetching: selectIsDDFetching,
  ddLoaded: isDDLoaded,
})

export default connect(mapStateToProps)(LineChart)
