import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StyledButton from './StyledButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  gridItem: {
    textAlign: 'right',
  }
}));

export default function ButtonAppBar() {
  const xs = useMediaQuery('(min-width:0px)');
  const sm = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <Box className={classes.root} my={2.5}>
      <AppBar position="static">
        <Box
          py={xs && !sm ? 3 : 0}
        >
          <Toolbar>

            <Grid
              container
              alignContent='center'
              alignItems='center'
              justify='space-between'
              spacing={2}
            >
              <Grid item xs={12} sm={8}>
                <Typography
                  align={xs && !sm ? 'center' : 'left'}
                  variant="body1"
                  className={classes.title}
                >
                  You can't checkout items in the checklist until you provide your band URL!
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} classes={{ item: classes.gridItem }}>
                <StyledButton
                  responsive
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{ color: '#fff' }}
                >
                  Add Url
                </StyledButton>
              </Grid>
            </Grid>
          </Toolbar>
        </Box>
      </AppBar>
    </Box >
  );
}