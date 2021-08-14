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
    textTransform: 'capitalize'
  },
  iwt: {
    marginTop: 5
  },
  weight600: {
    '& > *': {
      fontWeight: 600
    }
  }
}));

export default function UserProfileInfo({ user, setActiveLink, navs }) {

  const { photo, fullName } = user;

  const classes = useStyles();

  const navsList = (
    <List>
      {navs.map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} className={classes.listItemText} />
        </ListItem>
      ))}
    </List>
  );


  return (
    <Box pt={7} flexGrow={1} flexShrink={1} maxWidth='350px' minWidth='240px'>
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
      <nav>
        {navsList}
      </nav>
    </Box>
  );
}