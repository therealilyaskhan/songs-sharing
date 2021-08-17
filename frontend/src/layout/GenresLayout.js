import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import GenresDrawer from '../components/GenresDrawer';
import ExploreGenresScreen from '../screens/ExploreGenresScreen';
import SubscribedGenresScreen from '../screens/SubscribedGenresScreen';

import Image from '../assets/images/user_img.jpg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex'
  }
});

export default function GenreLayout() {
  const classes = useStyles();
  const [activeDrawerLink, setActiveDrawerLink] = useState('');

  //fetch the the navlinks for the Genres drawer from api endpoint:
  const genresDrawerLinks = [
    'explore',
    'subscribed'
  ];

  //fetch the list of genres a user can explore
  const exploreGenres = [
    {
      ID: 1,
      title: 'lorem ipsum',
      category: 'web',
      image: Image,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it."
    },
    {
      ID: 2,
      title: 'lorem ipsum',
      category: 'web',
      image: Image,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it."
    },
    {
      ID: 3,
      title: 'lorem ipsum',
      category: 'web',
      image: Image,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it."
    },
    {
      ID: 4,
      title: 'lorem ipsum',
      category: 'web',
      image: Image,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it."
    },
  ];

  //fetch the list of genres a user has subscribed to
  const subscribedGenres = [
    {
      ID: 5,
      title: 'lorem ipsum',
      category: 'web',
      image: Image,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it."
    },
    {
      ID: 6,
      title: 'lorem ipsum',
      category: 'web',
      image: Image,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it."
    }
  ];

  return (
    <Box className={classes.root}>
      <GenresDrawer
        genresDrawerLinks={genresDrawerLinks}
        setActiveDrawerLink={setActiveDrawerLink}
      />
      {
        activeDrawerLink === 'explore' ?
          <ExploreGenresScreen genres={exploreGenres} /> :
          activeDrawerLink === 'subscribed' ?
            <SubscribedGenresScreen genres={subscribedGenres} /> :
            null
      }
    </Box>
  );
}