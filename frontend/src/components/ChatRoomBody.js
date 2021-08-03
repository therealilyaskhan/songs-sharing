import React from 'react';

import Box from '@material-ui/core/Box';

export default function ChatRoomBody({ chatRoomID, className }) {
  return (
    <Box p={4} className={className || ''}>
      chat room body
    </Box>
  );
}