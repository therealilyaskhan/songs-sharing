import React from 'react';
import { AppBar, Box, makeStyles, Toolbar, Typography, useMediaQuery } from '@material-ui/core';

import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

import StyledButton from './controls/StyledButton';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: '#000',
    fontSize: '1.15rem',
    fontWeight: 600
  },
  appBarBtn: {
    padding: '6px 16px',
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    }
  },
  appBarBtns: {
    '& > :not(:last-child)': {
      marginRight: 8
    }
  },
  btnStartIcon: {
    marginRight: 4
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

export default function ChatRoomHeader({ chatRoomID }) {

  //run fetch query to fetch chatRoom name, members, checklist via chatRoomID
  let name;
  const members = [
    'Kannaj', 'Ilyas', 'Peter', 'David', 'Kathrine', 'Bella'
  ];

  switch (chatRoomID) {
    case 2:
      name = 'Feedback';
      break;
    case 3:
      name = 'Project ideas';
      break;
    case 4:
      name = 'Make a beatles cover';
      break;
    case 5:
      name = 'All rock';
      break;
    case 6:
      name = 'Pop';
      break;
    default:
      name = 'General';
  }


  const classes = useStyles();
  const xs = useMediaQuery('(max-width:599.95px)');

  const checklistHandler = (e) => {
    console.log('checklist clicked');
  };
  const showMembersHandler = (e) => {
    console.log('members clicked');
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
    >
      <Toolbar
        {...xs ? { className: `${classes.topbarXs}` } : {}}
      >
        <Typography
          variant="h6"
          component="h3"
          className={classes.title}
        >
          {`# ${name}`}
        </Typography>
        <Box className={classes.appBarBtns}>
          <StyledButton
            disableElevation
            startIcon={<PlaylistAddCheckOutlinedIcon />}
            classes={{
              startIcon: classes.btnStartIcon
            }}
            onClick={checklistHandler}
            variant="contained"
            color="secondary"
            style={{ color: '#fff' }}
            customStyles={classes.appBarBtn}
            size="small"
          >
            Checklist
          </StyledButton>
          <StyledButton
            disableElevation
            startIcon={<PeopleAltOutlinedIcon />}
            classes={{
              startIcon: classes.btnStartIcon
            }}
            onClick={showMembersHandler}
            variant="contained"
            color="secondary"
            style={{ color: '#fff' }}
            customStyles={classes.appBarBtn}
            size="small"
          >
            Members
          </StyledButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}