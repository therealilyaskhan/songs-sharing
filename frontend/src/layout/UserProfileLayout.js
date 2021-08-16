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
        name: 'guitar',
        kudos: 335,
      },
      {
        name: 'bass',
        kudos: 335,
      },
      {
        name: 'drum',
        kudos: 335,
      },
      {
        name: 'piano',
        kudos: 335,
      },
      {
        name: 'keyboard',
        kudos: 335,
      },
      {
        name: 'xylophone',
        kudos: 335,
      },
      {
        name: 'Adobe XD',
        kudos: 335,
      },
    ],
    songs: [
      {
        name: 'Dancehall Tokyo',
        kudos: 125,
      }
    ]
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
        {...xs ? { mx: xss ? 2.5 : 5 } : {}}
        pt={xss ? 3.5 : xs ? 4.5 : 5.5}
        pb={xss ? 4 : 7}
      >
        {
          activeLink === 'skills' ?
            <UserSkillsScreen skills={user.skills} userFullName={user.fullName} /> :
            activeLink === 'songs' ?
              <UserSongsScreen songs={user.songs} userFullName={user.fullName} /> :
              null
        }
      </Box>

    </Box>
  );
}
