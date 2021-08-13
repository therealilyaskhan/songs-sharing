import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import UserProfileInfo from '../components/UserProfileInfo';
import UserSkillsScreen from '../screens/UserSkillsScreen';
import UserSongsScreen from '../screens/UserSongsScreen';

import Image from '../assets/images/user_img.jpg';

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

  const navs = [
    'skills',
    'songs'
  ];

  return (
    <Box className={classes.root}>
      <UserProfileInfo
        navs={navs}
        user={user}
        setActiveLink={setActiveLink}
      />
      <Box style={{ backgroundColor: '#ff0000' }}>
        {
          activeLink === 'skills' ?
            <UserSkillsScreen /> :
            activeLink === 'songs' ?
              <UserSongsScreen /> :
              null
        }
      </Box>
    </Box>
  );
}
