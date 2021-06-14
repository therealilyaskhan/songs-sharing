import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  TopbarBtn: {
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    }
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  }
}));

export default function Topbar() {
  const classes = useStyles();
  return (
    <Box mx={5}>
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              to='/todo'
              className={classes.link}
            >
              XYZ.DEV
            </Link>
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            className={classes.TopbarBtn}
            size="small"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
