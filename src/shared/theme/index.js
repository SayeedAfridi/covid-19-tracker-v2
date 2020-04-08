import { createMuiTheme } from '@material-ui/core/styles'
import { blue, orange } from '@material-ui/core/colors'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222242',
    },
    secondary: {
      main: '#757575',
      light: '#bdbdbd',
      dark: '#212121',
    },
    types: {
      dark: {
        background: '#303044',
      },
    },
    background: {
      default: '#303044',
      paper: '#303044',
    },
    type: 'dark',
  },
})

export const lightTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
    type: 'light',
  },
})

export default theme
