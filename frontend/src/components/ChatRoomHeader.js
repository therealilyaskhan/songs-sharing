import React, { useState } from 'react';

import { AppBar, Box, makeStyles, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import StyledButton from './controls/StyledButton';

const useStyles = makeStyles((theme) => ({
  roomTitle: {
    flexGrow: 1,
    color: '#000',
    marginRight: '2.5rem',
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
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flexShrink: 0,
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
  const sm = useMediaQuery('(max-width:599.95px)');
  const md = useMediaQuery('(max-width:779.95px)');

  const [anchorEl, setAnchorEl] = useState(null);

  const checklistHandler = (e) => {
    console.log('checklist clicked');
  };
  const showMembersHandler = (e) => {
    console.log('members clicked');
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const appBarMenu = (
    <>
      <IconButton
        aria-label="more"
        aria-controls="app-bar-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="app-bar-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          handleClose();
          checklistHandler();
        }}>
          Checklist
        </MenuItem>
        <MenuItem onClick={() => {
          handleClose();
          showMembersHandler();
        }}>
          Members
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
    >
      <Toolbar
        {...sm ? { className: `${classes.topbarXs}` } : {}}
      >
        <Typography
          variant="h6"
          component="h3"
          className={classes.roomTitle}
        >
          {`# ${name}`}
        </Typography>
        <Box className={classes.appBarBtns}>
          {
            md ?
              appBarMenu
              :
              <>
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
              </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}