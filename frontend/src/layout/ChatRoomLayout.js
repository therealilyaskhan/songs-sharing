import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ChatRoomDrawer from '../components/ChatRoomDrawer';
import ChatRoomScreen from '../screens/ChatRoomScreen';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    display: 'flex'
  }
});

export default function BuildSong() {
  const classes = useStyles();
  const [selectedChatRoom, setSelectedChatRoom] = useState('');

  //fetch the names of public and band rooms from api endpoint:
  const chatRooms = {
    public: ['General', 'Feedback', 'Project ideas'],
    Band: ['Make a beatles cover', 'All rock', 'Pop']
  };

  return (
    <div div className={classes.root}>
      <ChatRoomDrawer
        chatRooms={chatRooms}
        setSelectedChatRoom={setSelectedChatRoom}
      />
      <ChatRoomScreen selectedChatRoom={selectedChatRoom} />
    </div>
  );
}
