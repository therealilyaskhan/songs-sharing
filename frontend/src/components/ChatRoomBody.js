import React from 'react';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Message from './Message';
import Image from '../assets/images/user_img.jpg';


const useStyles = makeStyles({
  conversation: {
    flex: '0 1 auto',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  }
});

export default function ChatRoomBody({ chatRoomID, className }) {

  const classes = useStyles();

  // fetch the latest certain amount of messages using the chatRoomID

  const messages = [
    {
      msgID: 1,
      userID: 1,
      userName: 'Kannaj',
      userImage: Image,
      time: 'sent at',
      message: 'Relevant stuff about dinosaurs',
      isMyMessage: false
    },
    {
      msgID: 2,
      userID: 1,
      userName: 'Kannaj',
      userImage: Image,
      time: 'sent at',
      message: 'The popup first show up on the center then is dismissed and replaced by another popup on the bottom of the screen. I initially thought it was a CSS issue',
      isMyMessage: false
    },
    {
      msgID: 3,
      userID: 2,
      userName: 'Ilyas',
      userImage: Image,
      time: 'sent at',
      message: 'What kinda work you were doing in the cuba Tony ? things like this that some construction business.',
      isMyMessage: true
    },
    {
      msgID: 4,
      userID: 3,
      userName: 'Robert',
      userImage: Image,
      time: 'sent at',
      message: 'What kinda work you were doing in the cuba Tony ? things like this that some construction business.',
      isMyMessage: false
    },
    {
      msgID: 5,
      userID: 2,
      userName: 'Ilyas',
      userImage: Image,
      time: 'sent at',
      message: 'The popup first show up on the center then is dismissed and replaced by another popup on the bottom of the screen. I initially thought it was a CSS issue',
      isMyMessage: true
    },
    {
      msgID: 6,
      userID: 2,
      userName: 'Ilyas',
      userImage: Image,
      time: 'sent at',
      message: 'What kinda work you were doing ?',
      isMyMessage: true
    },
    {
      msgID: 7,
      userID: 2,
      userName: 'Kannaj',
      userImage: Image,
      time: 'sent at',
      message: 'What kinda work you were doing in the cuba Tony ? things like this that some construction business.The popup first show up on the center then is dismissed.',
      isMyMessage: false
    },
    {
      msgID: 8,
      userID: 3,
      userName: 'Robert',
      userImage: Image,
      time: 'sent at',
      message: 'What kinda work you were doing in the cuba Tony ? things like this that some construction business.',
      isMyMessage: false
    },
    {
      msgID: 9,
      userID: 2,
      userName: 'Ilyas',
      userImage: Image,
      time: 'sent at',
      message: 'What kinda work you were doing ?',
      isMyMessage: true
    },
  ];

  return (
    <Box
      m={0}
      p={0}
      className={className || ''}
      display='flex'
      flexDirection='column'
      justifyContent='flex-end'
      alignItems='stretch'
      alignContent='stretch'
      height='100%'
      width='100%'
      minHeight='0px'
      minWidth='0px'
    >
      <Box
        p={4}
        pb={0}
        m={0}
        className={classes.conversation}
      >
        {
          messages.map((message) => {
            return (
              <Message
                key={message.msgID}
                msg={message}
              />
            );
          })
        }
      </Box>
    </Box >
  );
}