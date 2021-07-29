import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import UserSkillsScreen from '../screens/UserSkillsScreen';
import UserSongsScreen from '../screens/UserSongsScreen';
import UserProfileDrawer from '../components/UserProfileDrawer';

import Image from '../assets/images/band__photo.jpg';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    display: 'flex'
  }
});

export default function BuildSong() {
  const classes = useStyles();
  const [activeLink, setActiveLink] = useState('skills');

  //fetch user name, user photo URi, username etc
  const user = {
    photo: Image,
    fullName: 'David Gilmour'
  };

  return (
    <>
      <div div className={classes.root}>
        <UserProfileDrawer
          user={user}
          setActiveLink={setActiveLink}
        />
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
