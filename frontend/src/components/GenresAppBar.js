import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBarText: {
    letterSpacing: '.2px',
    fontWeight: 'bolder',
    '&:not(:last-child)': {
      marginBottom: '.8rem'
    }
  },
  toolBar: {
    flexDirection: 'column',
    paddingTop: '1.4rem',
    paddingBottom: '1.4rem'
  }
}));

export default function GenresAppBar() {

  const classes = useStyles();

  return (
    <AppBar
      position="static"
      elevation={0}
      color="primary"
    >
      <Toolbar className={classes.toolBar}>
        <Typography
          variant="subtitle1"
          component="h3"
          className={classes.appBarText}
        >
          Learn Guitar by playing from first principles
        </Typography>
        <Typography
          variant="subtitle1"
          component="h4"
        >
          Pick a genre and join a band looking for your skills
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
