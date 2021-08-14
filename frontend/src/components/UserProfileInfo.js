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
    fontSize: sm => sm ? '1.1rem' : '1.2rem',
    fontWeight: 700,
    color: '#C7C7C7',
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
  userNav: {
    marginTop: '4rem'
  },
  listItem: {
    textAlign: 'center',
    paddingTop: 1,
    paddingBottom: 1,
    '&:active > * > *, &:focus > * > *': {
      color: '#0F94EC'
    }
  },
  iwtTextSize: {
    '& > *': {
      fontSize: '0.85rem',
    }
  },
  userIcon: {
    marginTop: '-3px'
  },
  smallIcon: {
    width: '1.1rem',
    height: 'auto'
  }
}));

export default function UserProfileInfo({ userPhoto, fullName, setActiveLink, profileNavs }) {

  const sm = useMediaQuery('(max-width:640px)');
  const classes = useStyles(sm);

  const navs = (
    <List>
      {profileNavs.map((text) => (
        <ListItem
          key={text}
          className={classes.listItem}
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
    <Box py={9}>
      <Box>
        <CardAvatarResponsive
          src={userPhoto}
          centered
          alt="artist photo"
          aria-label="artist photo"
          size={sm ? 115 : 136}
        />
        <IWT
          centered
          endIcon
          text={fullName}
          customStyles={classes.iwt}
          textWeightRule={classes.weight600}
          {...sm ? { textSizeRule: classes.iwtTextSize } : {}}
        >
          <GitHubIcon
            color="primary"
            className={`${classes.userIcon} ${sm ? classes.smallIcon : ''}`}
          />
        </IWT>
      </Box>
      <nav className={classes.userNav}>
        {navs}
      </nav>
    </Box>
  );
}