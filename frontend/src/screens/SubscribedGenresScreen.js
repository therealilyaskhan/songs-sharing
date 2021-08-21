import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Image from '../assets/images/user_img.jpg';

import GenreSubscribedCard from '../components/GenreSubscribedCard';

const useStyles = makeStyles({
  root: {
    flex: '1 1 auto',
    padding: '2rem'
  }
});

export default function SubscribedGenresScreen() {

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

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {
        genres.map((genre) => {
          return (
            <GenreSubscribedCard key={genre.ID} genre={genre} />
          );
        })
      }
    </Box>
  );
}