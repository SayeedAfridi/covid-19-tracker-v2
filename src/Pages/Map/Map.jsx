import React, { useState, useRef, useEffect } from 'react'
import './mapbox-gl.css'
import './map.css'
import mapboxgl, { Marker } from 'mapbox-gl'
import { Grid, useTheme } from '@material-ui/core'

const Map = ({ fetchCountryData }) => {
  const theme = useTheme()
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)
  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken =
        'pk.eyJ1IjoiYWZyaWRpNTYzIiwiYSI6ImNqeXlsYTNmbjAwNGUzYnM1eG4za2ZvNzYifQ.RI9OYn5U6phw3KsaLPhXOA'
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [0, 0],
        zoom: 12,
      })

      map.on('load', () => {
        setMap(map)
      })
    }

    if (!map) {
      initializeMap({ setMap, mapContainer })
    }
  }, [map])

  return (
    <Grid
      container
      spacing={2}
      style={{
        background: theme.palette.type === 'light' ? '#fff' : '#3a3a4f',
        height: '90vh',
      }}
    >
      <div ref={(el) => (mapContainer.current = el)} className={`map`} />
    </Grid>
  )
}

export default Map
