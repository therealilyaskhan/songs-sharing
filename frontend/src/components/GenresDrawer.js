import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  homeLink: {
    color: '#fff',
    fontWeight: 400,
    fontSize: '1.6rem',
    textDecoration: 'none',
  },
  link: {
    color: '#fff',
    fontSize: '0.92rem'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'absolute',
    top: 4,
    left: 20,
    zIndex: 1200
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#000'
  },
  roomCategory: {
    fontSize: '0.97rem',
    color: '#0F94EC',
    textTransform: 'capitalize'
  },
  listItemText: {
    marginTop: 0,
    marginBottom: 0
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.10);'
  },
  roomsList: {
    flexGrow: 1
  },
  listItemButton: {
    '&:hover, :focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.15);'
    }
  }
}));

export default function GenresDrawer({ genresDrawerLinks, setActiveDrawerLink }) {

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const xs = useMediaQuery('(max-width:599.95px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {
        genresDrawerLinks.map((link) => {
          return (
            <ListItem
              key={link}
              onClick={() => {
                setActiveDrawerLink(link.toLocaleLowerCase());
                if (xs)
                  handleDrawerToggle();
              }}
              button
              classes={{
                button: classes.listItemButton
              }}
            >
              <ListItemText
                className={`${classes.listItemText}`}
                classes={{
                  primary: classes.link
                }}
                primary={link} />
            </ListItem>
          );
        })
      }
    </List>
  );



  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label="genres">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: `${classes.drawerPaper}`
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </ >
  );
}