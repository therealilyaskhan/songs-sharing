import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';

import CardAvatarResponsive from './Card/CardAvatarResponsive';
import IWT from './IWT';

const useStyles = makeStyles((theme) => ({
  listItemText: {
    fontSize: '1.2rem',
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
  }
}));

export default function UserProfileInfo({ user, setActiveLink, userNav }) {

  const { photo, fullName } = user;

  const classes = useStyles();

  const navs = (
    <List>
      {userNav.map((text) => (
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
    <Box pt={7} flexGrow={1} flexShrink={1} maxWidth='350px' minWidth='2  40px'>
      <Box>
        <CardAvatarResponsive
          src={photo}
          centered
          alt="artist photo"
          aria-label="artist photo"
          size={136}
        />
        <IWT
          centered
          endIcon
          text={fullName}
          textSizeRule={classes.iwtTextSize}
          customStyles={classes.iwt}
          textWeightRule={classes.weight600}
        >
          <GitHubIcon
            color="primary"
          />
        </IWT>
      </Box>
      <nav className={classes.userNav}>
        {navs}
      </nav>
    </Box>
  );
}