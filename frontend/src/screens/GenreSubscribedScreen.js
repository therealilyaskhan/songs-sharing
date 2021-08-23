import { makeStyles, useMediaQuery } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Image from '../assets/images/user_img.jpg';

import GenreSubscribedCard from '../components/GenreSubscribedCard';
import GenreSubscribedCardMobile from '../components/GenreSubscribedCardMobile';

const useStyles = makeStyles({
  root: {
    flex: '1 1 auto',
    padding: '2rem'
  }
});

export default function GenreSubscribedScreen() {

  //fetch the list of genres a user has subscribed to
  const genres = [
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
    },
    {
      ID: 7,
      title: 'lorem ipsum',
      category: 'web',
      image: Image,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it."
    }
  ];

  const max780 = useMediaQuery('(max-width:780px)');
  const max600 = useMediaQuery('(max-width:599.95px)');
  const max520 = useMediaQuery('(max-width:520px)');

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {
        (max780 && !max600) || max520
          ?
          genres.map((genre) => {
            return (
              <GenreSubscribedCardMobile key={genre.ID} genre={genre} />
            );
          })
          :
          genres.map((genre) => {
            return (
              <GenreSubscribedCard key={genre.ID} genre={genre} />
            );
          })
      }
    </Box>
  );
}