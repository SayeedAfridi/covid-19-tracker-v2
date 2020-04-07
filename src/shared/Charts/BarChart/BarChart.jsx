import React from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCountryData,
  selectIsCDFetching,
  isCDLoaded,
} from '../../../redux/CountryData/CountryData.selectors'
import Loader from '../../loader/loader'
import FadeElement from '../../FadeElement/FadeElement'

const BarChart = ({ data, loading, loaded }) => {
  return (
    <>
      <FadeElement enter={loading}>
        <Loader text='fetching data' />
      </FadeElement>
      <FadeElement enter={loaded}>
        {loaded && (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: [
                    'rgba(0,0,255, 0.7)',
                    'rgba(0,255,0, 0.7)',
                    'rgba(255,0,0, 0.7)',
                  ],
                  data: [
                    data.confirmed.value,
                    data.recovered.value,
                    data.deaths.value,
                  ],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: `Current State in ${data.country}`,
              },
            }}
          />
        )}
      </FadeElement>
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  data: selectCountryData,
  loading: selectIsCDFetching,
  loaded: isCDLoaded,
})
export default connect(mapStateToProps)(BarChart)
