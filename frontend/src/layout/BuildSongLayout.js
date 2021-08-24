import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Navbar from '../components/Navbar';
import ChecklistScreen from '../screens/ChecklistScreen';
import InfoScreen from '../screens/InfoScreen';
import BandScreen from '../screens/BandScreen';
import SubmissionScreen from '../screens/SubmissionsScreen';

const useStyles = makeStyles({
  screen: {
    width: "100%"
  }
});

export default function BuildSongLayout() {

  //fetch the top nav tabs from api endpoint
  const navs = [
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

  const classes = useStyles();
  const [activeNav, setActiveNav] = useState('checklist');

  return (
    <>
      <Navbar
        navs={navs}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <Box className={classes.screen}>
        <Container>
          <Grid container>
            {
              activeNav === 'checklist' ?
                <ChecklistScreen /> :
                activeNav === 'info' ?
                  <InfoScreen /> :
                  activeNav === 'bands' ?
                    <BandScreen /> :
                    activeNav === 'submission' ?
                      <SubmissionScreen /> :
                      null
            }
          </Grid>
        </Container>
      </Box>
    </>
  );
}
