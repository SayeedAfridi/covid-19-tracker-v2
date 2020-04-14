import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  Tooltip,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import NavDrawer from './NavDrawer'
import { navLinks } from './NavLinks'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import RedDot from '../shared/RedDot/RedDot'

//import covid19 from '../assets/images/covid-19.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    '@media (minWidth:0px) and (orientation: landscape)': { height: 48 },
    '@media (minWidth:600px)': { height: 64 },
    height: 56,
    width: '200px',
  },
  menuButton: {
    marginRight: theme.spacing(0.5),
  },
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#fff',
  },
}))

const Navigation = ({ hanldeTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const medium = useMediaQuery('(max-width:770px)')
  const xSmall = useMediaQuery('(max-width:336px)')
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link
              to='/'
              className={classes.link}
              style={{ fontSize: xSmall && '1rem' }}
            >
              Covid-19 Tracker
            </Link>
            <RedDot />
          </Typography>
          {!medium &&
            navLinks.map((link, i) => (
              <Link to={link.path} key={i} className={classes.link}>
                <Button color='inherit' key={i}>
                  {link.name}
                </Button>
              </Link>
            ))}
          <Tooltip title='Toggle Dark/Light Theme'>
            <IconButton
              edge='end'
              color='inherit'
              aria-label='Theme'
              onClick={hanldeTheme}
            >
              {theme.palette.type === 'dark' ? (
                <BrightnessHighIcon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Tooltip>

          {medium && (
            <IconButton
              edge='end'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <NavDrawer open={drawerOpen} setDrawer={setDrawerOpen}></NavDrawer>
      <div className={classes.appBarSpacer}></div>
    </div>
  )
}

export default Navigation
