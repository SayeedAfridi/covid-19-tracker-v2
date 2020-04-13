import React from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Fade } from '@material-ui/core'
import {
  selectCountryData,
  selectIsCDFetching,
  isCDLoaded,
} from '../../../redux/CountryData/CountryData.selectors'
import { ZoomLoader } from '../../ZoomLoader/ZoomLoader'

const BarChart = ({ data, loading, loaded }) => {
  return (
    <>
      <ZoomLoader enter={loading} text='Fetching Data' />
      {loaded && (
        <Fade in={loaded} mountOnEnter unmountOnExit timeout={300}>
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
                  data: [data.confirmed, data.recovered, data.deaths],
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
        </Fade>
      )}
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  data: selectCountryData,
  loading: selectIsCDFetching,
  loaded: isCDLoaded,
})
export default connect(mapStateToProps)(BarChart)
