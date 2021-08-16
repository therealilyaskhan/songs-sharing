import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import ChatRoomDrawer from '../components/ChatRoomDrawer';
import ChatRoomScreen from '../screens/ChatRoomScreen';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex'
  }
});

export default function ChatRoomLayout() {
  const classes = useStyles();
  const [selectedChatRoom, setSelectedChatRoom] = useState('');

  //fetch the the list of rooms api endpoint:
  const chatRooms = {
    public: [
      {
        ID: 1,
        name: 'General'
      },
      {
        ID: 2,
        name: 'Feedback'
      },
      {
        ID: 3,
        name: 'Project ideas'
      }
    ],
    band: [
      {
        ID: 4,
        name: 'Make a beatles cover'
      },
      {
        ID: 5,
        name: 'All rock'
      },
      {
        ID: 6,
        name: 'Pop'
      }
    ]
  };

  return (
    <Box className={classes.root}>
      <ChatRoomDrawer
        chatRooms={chatRooms}
        setSelectedChatRoom={setSelectedChatRoom}
      />
      <ChatRoomScreen selectedChatRoom={selectedChatRoom} />
    </Box>
  );
}
