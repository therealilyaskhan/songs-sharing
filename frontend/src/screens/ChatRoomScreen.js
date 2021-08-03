import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

import ChatRoomHeader from '../components/ChatRoomHeader';
import ChatRoomBody from '../components/ChatRoomBody';
import ChatRoomFooter from '../components/ChatRoomFooter';

const useStyles = makeStyles({
  chatHeader: {
    flex: '0 1 auto'
  },
  chatBody: {
    flex: '1 1 auto'
  },
  chatFooter: {
    flex: '0 1 auto'
  }
});

export default function ChatRoomScreen({ selectedChatRoom }) {

  const classes = useStyles();

  return (
    <Box
      width='100%'
      height='100vh'
      display='flex'
      flexDirection='column'
      flexWrap='nowrap'
    >
      <ChatRoomHeader
        className={classes.chatHeader}
        chatRoomID={selectedChatRoom}
      />
      <ChatRoomBody
        className={classes.chatBody}
        chatRoomID={selectedChatRoom}
      />
      <ChatRoomFooter
        className={classes.chatFooter}
        charRoomID={selectedChatRoom}
      />
    </Box>
  );
};;;;;;;;