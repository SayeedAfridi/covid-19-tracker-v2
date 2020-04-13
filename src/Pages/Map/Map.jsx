import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import './mapbox-gl.css'
import './marker.css'
import './map.css'
import mapboxgl from 'mapbox-gl'
import { Grid, useTheme } from '@material-ui/core'
import { selectAllData } from '../../redux/AllData/AllData.selectors'
import { createStructuredSelector } from 'reselect'
import { convertGeoJson } from './converToGeoJson'
import { mapBoxAccessToken } from '../../config'
import { ZoomLoader } from '../../shared/ZoomLoader/ZoomLoader'

const Map = ({ data }) => {
  const theme = useTheme()
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)
  const [loading, setLoading] = useState(true)
  const type = theme.palette.type
  const mapStyle =
    localStorage.getItem('theme') === 'light'
      ? 'mapbox://styles/afridi563/ck8ut3l0f1ok61in0thektj1u'
      : 'mapbox://styles/afridi563/ck8useswq1nru1jqnhbhdt5tj'

  useEffect(() => {
    if (data) {
      const initializeMap = ({ setMap, mapContainer }) => {
        mapboxgl.accessToken = mapBoxAccessToken
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: mapStyle,
          center: [90.3563, 23.685],
          zoom: 2,
        })

        map.on('load', () => {
          setMap(map)
          const geoJson = convertGeoJson(data)
          // map.addSource('points', {
          //   type: 'geojson',
          //   data: geoJson,
          // })
          geoJson.features.forEach((feature) => {
            const { properties = {} } = feature
            let casesString

            const { country, active, cases, deaths, recovered } = properties

            casesString = `${cases}`

            if (cases > 1000) {
              casesString = `${casesString.slice(0, -3)}k+`
            }

            const iconMarker = document.createElement('div')
            iconMarker.className = 'marker'
            iconMarker.innerHTML = `
            ${casesString}
        `
            const popupHtml = `<span class='popup-content'>
            <h2>${country}</h2>
            <ul>
              <li><strong>Infected:</strong><span> ${cases}</span></li>
              <li><strong>Deaths:</strong><span style='color:red'> ${deaths}</span></li>
              <li><strong>Recovered:</strong><span style='color:green'> ${recovered}</span></li>
              <li><strong>Active:</strong><span style='color:orange'> ${active}</span></li>
            </ul>
          </span>`
            new mapboxgl.Marker(iconMarker)
              .setLngLat(feature.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml))
              .addTo(map)
          })
          map.resize()
          setLoading(false)
        })
      }
      if (!map) {
        initializeMap({ setMap, mapContainer })
      }
      if (map) {
        if (type === 'light') {
          map.setStyle('mapbox://styles/afridi563/ck8ut3l0f1ok61in0thektj1u')
        } else {
          map.setStyle('mapbox://styles/afridi563/ck8useswq1nru1jqnhbhdt5tj')
        }
      }
    }
    //eslint-disable-next-line
  }, [type, data, map])
  return (
    <Grid
      container
      spacing={2}
      style={{
        background: theme.palette.type === 'light' ? '#fff' : '#3a3a4f',
        height: '90vh',
        width: '100vw',
      }}
    >
      <ZoomLoader enter={loading && !map} text='Loading Map' />
      <div ref={(el) => (mapContainer.current = el)} className={`map`} />
    </Grid>
  )
}
const mapStateToProps = createStructuredSelector({
  data: selectAllData,
})
export default connect(mapStateToProps)(Map)
