import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';

import CardAvatarResponsive from './Card/CardAvatarResponsive';
import IWT from './IWT';

const infoWidth = 350;

const useStyles = makeStyles((theme) => ({
  listItemText: {
    textTransform: 'capitalize'
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
    <Box flexBasis={infoWidth} pt={7}>
      <Box>
        <CardAvatarResponsive
          src={photo}
          centered
          alt="artist photo"
          aria-label="artist photo"
          size={136}
        />
        <IWT
          endIcon
          text={fullName}
          textSizeRule={classes.iwtTextSize}
        >
          <GitHubIcon
            color="secondary"
          />
        </IWT>
      </Box>
      <nav>
        {navsList}
      </nav>
    </Box>
  );
}