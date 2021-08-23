import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Image from '../assets/images/user_img.jpg';

import GenreExploreCard from '../components/GenreExploreCard';

const useStyles = makeStyles({
  root: {
    flex: '1 1 auto',
    padding: '2rem',
  }
});

export default function GenreExploreScreen() {

  //fetch the list of genres a user can explore
  const genres = [
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

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {
        genres.map((genre) => {
          return (
            <GenreExploreCard key={genre.ID} genre={genre} />
          );
        })
      }
    </Box>
  );
}