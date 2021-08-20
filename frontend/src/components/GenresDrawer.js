import React, { useEffect, useState } from 'react';

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
    color: '#C7C7C7',
    fontSize: '1.15rem',
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  navTitle: {
    letterSpacing: '.2px',
    color: '#000',
    fontSize: '1.5rem',
    fontWeight: 600,
    textTransform: 'capitalize'
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
    position: 'fixed',
    top: 4,
    left: 20,
    zIndex: 1200
  },
  drawerPaper: {
    width: drawerWidth,
    paddingLeft: '.8rem',
    paddingTop: '2rem',
    backgroundColor: '#f7f7f7',
    borderRight: 'none',
    boxSizing: 'border-box',
  },
  desktopDrawerPaper: {
    top: 185,
    alignItems: 'center',
    position: 'static'
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
  active: {
    '& > *': {
      color: '#0F94EC'
    }
  },
  cursorPointer: {
    cursor: 'pointer'
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

export default function GenresDrawer({ genresDrawerLinks, activeDrawerLink, setActiveDrawerLink }) {

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const xs = useMediaQuery('(max-width:599.95px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    document.addEventListener('scroll', function () {
      let scrollTop =
        document.documentElement['scrollTop'] || document.body['scrollTop'];
      if (scrollTop > 83.151)
        document
          .getElementById('genre-drawer')
          .style.cssText = "position: fixed; top: 93.993px";
      else
        document
          .getElementById('genre-drawer')
          .style.cssText = "position: static; top: 185px";
    });
  }, []);

  const drawer = (
    <List>
      <ListItem>
        <ListItemText
          className={`${classes.listItemText}`}
          classes={{
            primary: classes.navTitle
          }}
          primary='Genres' />
      </ListItem>
      {
        genresDrawerLinks.map((link) => {
          return (
            <ListItem key={link}>
              <ListItemText
                className={`${classes.listItemText} ${classes.cursorPointer} ${activeDrawerLink === link ? classes.active : ''}`}
                onClick={() => {
                  setActiveDrawerLink(link.toLocaleLowerCase());
                  if (xs)
                    handleDrawerToggle();
                }}
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
            id='genre-drawer'
            classes={{
              paper: `${classes.drawerPaper} ${classes.desktopDrawerPaper}`
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