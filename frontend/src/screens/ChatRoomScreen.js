import React from 'react';

import { Box } from '@material-ui/core';

import ChatRoomHeader from '../components/ChatRoomHeader';
import ChatRoomBody from '../components/ChatRoomBody';
import ChatRoomFooter from '../components/ChatRoomFooter';

export default function ChatRoomScreen({ selectedChatRoom }) {
  return (
    <Box>
      <ChatRoomHeader></ChatRoomHeader>
      <ChatRoomBody></ChatRoomBody>
      <ChatRoomFooter></ChatRoomFooter>
    </Box>
  );
}