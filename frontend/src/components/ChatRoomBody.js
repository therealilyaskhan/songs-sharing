import React from 'react';

import Box from '@material-ui/core/Box';

import Message from './Message';
import Image from '../assets/images/band__photo.jpg';

export default function ChatRoomBody({ chatRoomID, className }) {

  // fetch the latest certain amount of messages using the chatRoomID

  const messages = [
    {
      msgID: 1,
      userID: 1,
      userName: 'Kannaj',
      userImage: Image,
      time: 'sent at',
      message: 'Relevant stuff about dinosaurs'
    },
    {
      msgID: 2,
      userID: 1,
      userName: 'Kannaj',
      userImage: Image,
      time: 'sent at',
      message: 'The popup first show up on the center then is dismissed and replaced by another popup on the bottom of the screen. I initially thought it was a CSS issue'
    }
  ];

  return (
    <Box p={4} className={className || ''}>
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
  );
}