import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import ChecklistScreen from './ChecklistScreen';
import InfoScreen from './InfoScreen';
import BandScreen from './BandScreen';
import SubmissionScreen from './SubmissionsScreen';

const useStyles = makeStyles({
  screen: {
    backgroundColor: "#f9f9f9",
    width: "100%"
  }
});

export default function BuildSong() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('checklist');

  return (
    <>
      <Navbar setActiveTab={setActiveTab} />
      <div className={classes.screen}>
        <Container>
          <Grid container>
            {
              activeTab === 'checklist' ?
                <ChecklistScreen /> :
                activeTab === 'info' ?
                  <InfoScreen /> :
                  activeTab === 'bands' ?
                    <BandScreen /> :
                    activeTab === 'submission' ?
                      <SubmissionScreen /> :
                      null
            }
          </Grid>
        </Container>
      </div>
    </>
  );
}
