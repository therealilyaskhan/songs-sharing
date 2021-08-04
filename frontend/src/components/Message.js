import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import CardContent from './Card/CardContent';
import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';

const useStyles = makeStyles({
  userAvatar: {
    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.25)',
    border: '1px solid #707070'
  },
  msgBox: {
    display: 'inline-block',
    width: 'fit-content'
  }
});

export default function Message({ msg }) {

  const classes = useStyles();

  const { userImage, message } = msg;
  return (
    <Box
      display='flex'
      alignItems='center'
      mb={2.5}
      flexWrap='nowrap'
      width='85%'
      maxWidth='85%'
    >
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
      </Box>

      <Box
        flexGrow={1}
        flexBasis='100%'
      >
        <CardContainer
          customStyles={classes.msgBox}
          elevation={1}
          br={40}
          pt={8}
          pb={8}
          mt={0}
          mb={0}
          ml={20}
        >
          <CardContent
            pb={16}
          >
            {message}
          </CardContent>
        </CardContainer>
      </Box>
    </Box>
  );
};