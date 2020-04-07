import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import NavDrawer from './NavDrawer'
import { navLinks } from './NavLinks'
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
    marginRight: theme.spacing(2),
  },
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'black',
  },
}))

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()
  const medium = useMediaQuery('(max-width:770px)')
  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='default' elevation={0}>
        <Toolbar>
          {/* <div className={classes.title}>
            <img
              src={covid19}
              alt='Covid-19-Tracker'
              className={classes.logo}
            />
          </div> */}
          <Typography variant='h5' className={classes.title}>
            <Link to='/' className={classes.link}>
              Covid-19 Tracker
            </Link>
          </Typography>
          {!medium &&
            navLinks.map((link, i) => (
              <Link to={link.path} key={i} className={classes.link}>
                <Button color='inherit' key={i}>
                  {link.name}
                </Button>
              </Link>
            ))}
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
