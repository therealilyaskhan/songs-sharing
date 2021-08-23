import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import GenreExploreScreen from '../screens/GenreExploreScreen';
import GenreSubscribedScreen from '../screens/GenreSubscribedScreen';

import GenresDrawer from '../components/GenresDrawer';
import GenresAppBar from '../components/GenresAppBar';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex'
  }
});

export default function GenreLayout() {

  //fetch the the navlinks for the Genres drawer from api endpoint:
  const genresDrawerLinks = [
    'explore',
    'subscribed'
  ];

  const classes = useStyles();
  const [activeDrawerLink, setActiveDrawerLink] = useState('explore');

  return (
    <Box>
      <GenresAppBar />
      <Box className={classes.root}>
        <GenresDrawer
          genresDrawerLinks={genresDrawerLinks}
          activeDrawerLink={activeDrawerLink}
          setActiveDrawerLink={setActiveDrawerLink}
        />
        {
          activeDrawerLink === 'explore' ?
            <GenreExploreScreen /> :
            activeDrawerLink === 'subscribed' ?
              <GenreSubscribedScreen /> :
              null
        }
      </Box>
    </Box >
  );
}