import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Box, useMediaQuery } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';

import CardAvatarResponsive from './Card/CardAvatarResponsive';
import IWT from './IWT';

const useStyles = makeStyles((theme) => ({
  listItemText: {
    fontSize: mediaQueries => mediaQueries.sm ? '1.1rem' : '1.2rem',
    fontWeight: 700,
    color: mediaQueries => mediaQueries.xs ? '#f1f1f1' : '#C7C7C7',
    textTransform: 'capitalize'
  },
  iwt: {
    marginTop: 5
  },
  weight600: {
    '& > *': {
      fontWeight: 600
    }
  },
  userInfo: {
    paddingBottom: mediaQueries => mediaQueries.xss ? '2.6rem' : mediaQueries.xs ? '3.5rem' : '4rem',
    paddingTop: mediaQueries => mediaQueries.xs ? 52 : 72,
    backgroundColor: mediaQueries => mediaQueries.xs ? '#ffffff' : 'transparent',
    borderBottomLeftRadius: mediaQueries => mediaQueries.xs ? 40 : 0,
    borderBottomRightRadius: mediaQueries => mediaQueries.xs ? 40 : 0
  },
  userNav: {
    paddingBottom: mediaQueries => mediaQueries.xss ? 10 : mediaQueries.xs ? 15 : 72,
    paddingTop: mediaQueries => mediaQueries.xss ? 8 : mediaQueries.xs ? 13 : 0,
  },
  navListItem: {
    width: mediaQueries => mediaQueries.xs ? 'auto' : '100%',
    textAlign: 'center',
    paddingTop: 1,
    paddingBottom: 1,
    '&:active > * > *, &:focus > * > *': {
      color: '#0F94EC'
    },
    '&:active, &:focus': {
      backgroundColor: mediaQueries => mediaQueries.xs ? '#ffffff' : 'transparent'
    },
    borderRadius: 50,
    marginRight: mediaQueries => mediaQueries.xs ? 8 : 0
  },
  iwtTextSize: {
    '& > *': {
      fontSize: '0.85rem',
    }
  },
  iwtTextSizeXs: {
    '& > *': {
      fontSize: '1.15rem',
    }
  },
  iwtTextSizeXss: {
    '& > *': {
      fontSize: '0.95rem',
    }
  },
  userIcon: {
    marginTop: '-3px'
  },
  smallIcon: {
    width: '1.1rem',
    height: 'auto'
  },
  navList: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function UserProfileInfo({ userPhoto, fullName, setActiveLink, profileNavs }) {

  const sm = useMediaQuery('(max-width:640px)');
  const xs = useMediaQuery('(max-width:599.95px)');
  const xss = useMediaQuery('(max-width:430px)');
  const mediaQueries = {
    sm,
    xs,
    xss
  };
  const classes = useStyles(mediaQueries);

  const navs = (
    <List className={xs ? classes.navList : ''}>
      {profileNavs.map((text) => (
        <ListItem
          key={text}
          className={classes.navListItem}
          onClick={() => { setActiveLink(text.toLocaleLowerCase()); }}
          button
          disableRipple
        >
          <ListItemText
            classes={{
              primary: classes.listItemText
            }}
            primary={text}
          />
        </ListItem>
      ))}
    </List>
  );


  return (
    <Box>
      <Box className={classes.userInfo}>
        <CardAvatarResponsive
          src={userPhoto}
          centered
          alt="artist photo"
          aria-label="artist photo"
          size={xss ? 138 : xs ? 150 : sm ? 115 : 136}
        />
        <IWT
          centered
          endIcon
          text={fullName}
          customStyles={classes.iwt}
          textWeightRule={classes.weight600}
          {...sm ? { textSizeRule: xss ? classes.iwtTextSizeXss : xs ? classes.iwtTextSizeXs : classes.iwtTextSize } : {}}
        >
          <GitHubIcon
            color="primary"
            className={`${classes.userIcon} ${(sm && !xs) || xss ? classes.smallIcon : ''}`}
          />
        </IWT>
      </Box>
      <nav className={classes.userNav}>
        {navs}
      </nav>
    </Box>
  );
}