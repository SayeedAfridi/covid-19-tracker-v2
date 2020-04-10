export const convertGeoJson = (data) => {
  const hasData = Array.isArray(data) && data.length > 0

  if (!hasData) return

  const geoJson = {
    type: 'FeatureCollection',
    features: data.map((country = {}) => {
      const { countryInfo = {} } = country
      const { lat, long: lng } = countryInfo
      return {
        type: 'Feature',
        properties: {
          ...country,
        },
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
      }
    }),
  }
  return geoJson
}
