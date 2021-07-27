import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StyledButton from './controls/StyledButton';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  tab: {
    margin: '0px 10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    '&:active, &:focus': {
      backgroundColor: theme.palette.secondary.main,
      BorderColor: theme.palette.secondary.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark
      }
    }
  }
}));

export default function Navbar({ setActiveTab }) {
  const classes = useStyles();

  //fetch the tabs from api endpoint
  const tabs = [
    {
      name: 'checklist',
      path: '/checklist'
    },
    {
      name: 'info',
      path: '/info'
    },
    {
      name: 'bands',
      path: '/bands'
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
            {tabs.map((tab) => (
              <StyledButton
                disableElevation
                size="large"
                color="inherit"
                key={tab.name}
                customStyles={classes.tab}
                onClick={() => { setActiveTab(tab.name.toLocaleLowerCase()); }}
              >
                {tab.name}
              </StyledButton>
            ))
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
