import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import UserSkillsScreen from '../screens/UserSkillsScreen';
import UserSongsScreen from '../screens/UserSongsScreen';
import UserProfileDrawer from '../components/UserProfileDrawer';

const useStyles = makeStyles({
  screen: {
    backgroundColor: "#f9f9f9",
    width: "100%"
  }
});

export default function BuildSong() {
  const classes = useStyles();
  const [activeLink, setActiveLink] = useState('skills');

  return (
    <>
      <div className={classes.screen}>
        {/* pass sidenav with user object and nav links and a lifting state up callback */}
        <UserProfileDrawer setActiveLink={setActiveLink} />
        <Container>
          <Grid container>
            {
              activeLink === 'skills' ?
                <UserSkillsScreen /> :
                activeLink === 'songs' ?
                  <UserSongsScreen /> :
                  null
            }
          </Grid>
        </Container>
      </div>
    </>
  );
}
