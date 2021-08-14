import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import UserProfileInfo from '../components/UserProfileInfo';
import UserSkillsScreen from '../screens/UserSkillsScreen';
import UserSongsScreen from '../screens/UserSongsScreen';

import Photo from '../assets/images/user_img.jpg';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    display: 'flex'
  }
});

export default function BuildSong() {
  const classes = useStyles();
  const sm = useMediaQuery('(max-width:640px)');
  const [activeLink, setActiveLink] = useState('skills');

  //fetch user data from api endpoint
  const user = {
    photo: Photo,
    fullName: 'David Gilmour',
    skills: [
      {
        skillName: 'guitar',
        kudos: 335,
      },
      {
        skillName: 'bass',
        kudos: 335,
      },
      {
        skillName: 'drum',
        kudos: 335,
      },
      {
        skillName: 'piano',
        kudos: 335,
      },
      {
        skillName: 'keyboard',
        kudos: 335,
      },
      {
        skillName: 'xylophone',
        kudos: 335,
      },
      {
        skillName: 'Adobe XD',
        kudos: 335,
      },
    ],
    songs: []
  };

  const profileNavs = [
    'skills',
    'songs'
  ];

  return (
    <Box className={classes.root}>

      <Box
        flexGrow={1}
        flexShrink={1}
        minWidth={sm ? '200px' : '240px'}
        maxWidth='350px'
      >
        <UserProfileInfo
          profileNavs={profileNavs}
          fullName={user.fullName}
          userPhoto={user.photo}
          setActiveLink={setActiveLink}
        />
      </Box>

      <Box
        flexGrow={2.8}
        flexShrink={1}
      >
        {
          activeLink === 'skills' ?
            <UserSkillsScreen skills={user.skills} userFullName={user.fullName} /> :
            activeLink === 'songs' ?
              <UserSongsScreen /> :
              null
        }
      </Box>

    </Box>
  );
}
