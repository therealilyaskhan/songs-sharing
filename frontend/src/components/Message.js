import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { lightBlue } from '@material-ui/core/colors';

import CardContentSimple from './Card/CardContentSimple';
import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';

const useStyles = makeStyles({
  userAvatar: {
    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.25)',
    border: '1px solid #707070'
  },
  msgBox: {
    width: 'fit-content',
  },
  myMsg: {
    margin: '-1px 0px -1px',
    lineHeight: '18px',
    color: '#fff'
  },
  otherMsg: {
    margin: '-1px 0px -1px',
    lineHeight: '18px',
    color: '#011627'
  },
  bgMyMsg: {
    backgroundColor: lightBlue[600]
  }
});

export default function Message({ msg }) {

  const classes = useStyles();

  const { userImage, message, isMyMessage } = msg;
  return (
    <Box
      mb={2.5}
      flexGrow={0}
      flexShrink={0}
      flexBasis='auto'
      display='flex'
      justifyContent={isMyMessage ? 'flex-end' : 'flex-start'}
      alignItems='center'
      flexWrap='nowrap'
    >
      {
        !isMyMessage ?
          <Box
            flexShrink={0}
            flexGrow={0}
          >
            <CardAvatarResponsive
              customStyles={classes.userAvatar}
              src={userImage}
              alt="User image"
              aria-label="user-image"
              size={62}
            />
          </Box> :
          null
      }

      <Box
        flexGrow={1}
        flexShrink={1}
        flexBasis='70%'
        maxWidth='70%'
        display='flex'
        alignItems='center'
        justifyContent={isMyMessage ? 'flex-end' : 'flex-start'}
      >
        <CardContainer
          customStyles={`${classes.msgBox} ${isMyMessage ? classes.bgMyMsg : ''}`}
          elevation={1}
          br={40}
          pt={8}
          pb={8}
          mt={0}
          mb={0}
          ml={isMyMessage ? 0 : 20}
        >
          <CardContentSimple
            pb={16}
          >
            <Typography
              className={isMyMessage ? classes.myMsg : classes.otherMsg}
              variant='subtitle2'
              component='div'
            >
              {message}
            </Typography>
          </CardContentSimple>
        </CardContainer>
      </Box>
    </Box>
  );
};