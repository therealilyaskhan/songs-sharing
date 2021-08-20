import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    flex: '1 1 auto'
  }
});

export default function SubscribedGenresScreen({ genres }) {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      Subscribed Genres Screen
    </Box>
  );
}