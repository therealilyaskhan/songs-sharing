import React from 'react';
import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import StyledButton from './controls/StyledButton';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  topbarBtn: {
    fontWeight: 'bold',
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    }
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  },
  topbarXs: {
    textAlign: 'center',
    '&:before': {
      content: '""',
      flexGrow: 1,
      flexBasis: 0,
      opacity: 0,
      visibility: 'hidden'
    },
    '& > :last-child': {
      flexGrow: 1,
      flexBasis: 0,
      textAlign: 'right'
    }
  }
}));

export default function Topbar({ responsive }) {
  const classes = useStyles();
  const xs = useMediaQuery('(max-width:599.95px)');

  return (
    <Box mx={xs ? 2.5 : 5}>
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
      >
        <Toolbar
          {...xs && responsive ? { className: `${classes.topbarXs}` } : {}}
        >
          <Typography variant="h6" className={classes.title}>
            <Link
              to='/build'
              className={classes.link}
            >
              XYZ.DEV
            </Link>
          </Typography>
          <Box>
            <StyledButton
              variant="outlined"
              color="inherit"
              customStyles={classes.topbarBtn}
              size="small"
            >
              Login
            </StyledButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
