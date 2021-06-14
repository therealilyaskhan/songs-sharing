import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  TopbarBtn: {
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    },
    backgroundColor: '#000',
    color: '#fff',
    BorderColor: '#000'
  },
  step: {
    margin: '0px 10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    '&:active, &:focus': {
      backgroundColor: theme.palette.secondary.main,
      BorderColor: theme.palette.secondary.main,
      color: '#fff',
    }
  }
}));

export default function Navbar({ history }) {
  const classes = useStyles();

  //fetch the steps involved in building a song from api endpoint
  const songBuildSteps = [
    {
      name: 'checklist',
      path: '/checklist'
    },
    {
      name: 'info',
      path: '/info'
    },
    {
      name: 'teams',
      path: '/teams'
    },
    {
      name: 'submission',
      path: '/submission'
    }
  ];

  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        color="primary"
      >
        <Toolbar style={{ flexDirection: 'column', padding: '10px' }}>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ margin: '5px' }}
          >
            Build a song
          </Typography>
          <Box mb={2} mt={0.5} display="flex" justifyContent='center' width="100%">
            {songBuildSteps.map((step) => (
              <Button
                size="large"
                color="inherit"
                key={step.name}
                className={classes.step}
                elevation={0}
              >
                {step.name}
              </Button>
            ))
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
