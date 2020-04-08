import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import { navLinks } from './NavLinks'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  list: {
    width: '250px',
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
  },
}))

const NavDrawer = ({ open, setDrawer }) => {
  const classes = useStyles()
  return (
    <Drawer anchor='right' open={open} onClose={() => setDrawer(false)}>
      <List className={classes.list}>
        {navLinks.map((link, i) => (
          <Link
            to={link.path}
            key={i}
            className={classes.link}
            onClick={() => setDrawer(false)}
          >
            <ListItem button>
              <ListItemText primary={link.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

export default NavDrawer
