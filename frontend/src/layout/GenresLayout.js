import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import ExploreGenresScreen from '../screens/ExploreGenresScreen';
import SubscribedGenresScreen from '../screens/SubscribedGenresScreen';

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
            <ExploreGenresScreen /> :
            activeDrawerLink === 'subscribed' ?
              <SubscribedGenresScreen /> :
              null
        }
      </Box>
    </Box >
  );
}