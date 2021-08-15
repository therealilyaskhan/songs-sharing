import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import UserProfileInfo from '../components/UserProfileInfo';
import UserSkillsScreen from '../screens/UserSkillsScreen';
import UserSongsScreen from '../screens/UserSongsScreen';

import Photo from '../assets/images/user_img.jpg';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    display: 'flex',
    flexDirection: xs => xs ? 'column' : 'row',
    alignItems: xs => xs ? 'stretch' : 'flex-start'
  },
  userInfoOnXs: {
    backgroundColor: theme.palette.secondary.dark,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
}));

export default function BuildSong() {
  const md = useMediaQuery('(max-width:680px)');
  const sm = useMediaQuery('(max-width:640px)');
  const xs = useMediaQuery('(max-width:599.95px)');
  const xss = useMediaQuery('(max-width:415px)');
  const classes = useStyles(xs);
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
        {...xs ? { className: classes.userInfoOnXs } : {}}
        flexGrow={1}
        flexShrink={1}
        minWidth={xs ? '100%' : sm ? '200px' : '240px'}
        maxWidth='320px'
      >
        <UserProfileInfo
          profileNavs={profileNavs}
          fullName={user.fullName}
          userPhoto={user.photo}
          setActiveLink={setActiveLink}
        />
      </Box>

      <Box
        flexGrow={2}
        flexShrink={1}
        mr={xs ? 0 : sm ? 4 : md ? 5 : 8}
        {...xs ? { mx: xss ? 2 : 5 } : {}}
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
