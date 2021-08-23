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
      width: mediaQueries => (mediaQueries.max660 && !mediaQueries.xs) ? 200 : mediaQueries.max680 ? 220 : mediaQueries.max900 ? 240 : mediaQueries.max960 ? 225 : mediaQueries.max1288 ? 240 : 270
    },
    flexShrink: 0
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
    width: 240,
    paddingLeft: '1.2rem',
    backgroundColor: '#f7f7f7',
    [theme.breakpoints.up('sm')]: {
      width: mediaQueries => (mediaQueries.max660 && !mediaQueries.xs) ? 200 : mediaQueries.max960 ? 225 : mediaQueries.max1288 ? 240 : 270,
      top: 185,
      alignItems: mediaQueries => mediaQueries.max660 ? 'flex-start' : 'center',
      position: 'static',
      paddingLeft: mediaQueries => !mediaQueries.max660 ? '0.6rem' : '1.2rem',
      backgroundColor: 'transparent'
    },
    paddingTop: '2.5rem',
    borderRight: 'none',
    boxSizing: 'border-box',
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

  const max1288 = useMediaQuery('(max-width:1288px)');
  const max960 = useMediaQuery('(max-width:960px)');
  const max900 = useMediaQuery('(max-width:900px)');
  const max680 = useMediaQuery('(max-width:680px)');
  const max660 = useMediaQuery('(max-width:660px)');
  const xs = useMediaQuery('(max-width:599.95px)');

  const mediaQueries = {
    max1288,
    max960,
    max900,
    max680,
    max660,
    xs
  };

  const classes = useStyles(mediaQueries);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const stickyDrawerHandler = function () {
    let scrollTop =
      document.documentElement['scrollTop'] || document.body['scrollTop'];
    if (scrollTop >= 113.578)
      document
        .getElementById('genre-drawer')
        .style.cssText = "position: fixed; top: 64px";
    else
      document
        .getElementById('genre-drawer')
        .style.cssText = "position: static";
  };

  useEffect(() => {
    document.addEventListener('scroll', stickyDrawerHandler);

    return function () {
      document.removeEventListener('scroll', stickyDrawerHandler);
    };
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