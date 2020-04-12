import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { fetchData } from '../../api/itvanilla'
import {
  selectGlobalData,
  selectIsGDFetching,
  isGDLoaded,
} from '../../redux/GlobalData/GlobalData.selectors'
import InfoCard from '../../shared/InfoCard/InfoCard'
const LeftCards = ({ globalData, gdFetching, gdLoaded }) => {
  const [CD, setCD] = useState(null)
  const [CDFetching, setCDFetching] = useState(false)

  useEffect(() => {
    setCDFetching(true)
    const fetchApi = async () => {
      const data = await fetchData('Bangladesh')
      setCD(data)
      setCDFetching(false)
    }
    if (!CD) {
      fetchApi()
    }
    //eslint-disable-next-line
  }, [])

  return (
    <Grid item md={3} xs={12} lg={3}>
      <InfoCard
        title='Global'
        color='red'
        data={globalData}
        loading={gdFetching}
        loaded={gdLoaded}
      />
      <InfoCard
        title='Bangladesh'
        color='green'
        data={CD}
        loading={CDFetching}
        loaded={!!CD}
      />
    </Grid>
  )
}
const mapStateToProps = createStructuredSelector({
  globalData: selectGlobalData,
  gdFetching: selectIsGDFetching,
  gdLoaded: isGDLoaded,
})
export default connect(mapStateToProps)(LeftCards)
