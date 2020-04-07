import React from 'react'
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCountries } from '../../redux/Countries/Countries.selectors'
const CountryPicker = ({ countries, handleCountryChange }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value='Bangladesh'>Bangladesh</option>
        {countries.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}
const mapStateToProps = createStructuredSelector({
  countries: selectCountries,
})

export default connect(mapStateToProps)(CountryPicker)
