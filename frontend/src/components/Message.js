import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';

import CardContent from './Card/CardContent';
import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';

const useStyles = makeStyles({
  userAvatar: {
    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.25)',
    border: '1px solid #707070'
  },
  msgBox: {
    width: 'fit-content'
  },
  msg: {
    margin: '-2px 0px -2px',
    lineHeight: '18px'
  }
});

export default function Message({ msg }) {

  const lg = useMediaQuery('(max-width:1279.95px)'); //90%
  const md = useMediaQuery('(max-width:650px)'); //90%
  const sm = useMediaQuery('(max-width:620px)'); //95%
  const xs = useMediaQuery('(max-width:599.95px)'); //85%
  const xss = useMediaQuery('(max-width:500px)'); //95%

  const msgWidth = xss ? '95%' : xs ? '85%' : sm ? '95%' : md ? '90%' : lg ? '85%' : '80%';

  const classes = useStyles();

  const { userImage, message } = msg;
  return (
    <Box
      display='flex'
      alignItems='center'
      mb={2.5}
      flexWrap='nowrap'
      width={msgWidth}
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
            <Typography
              className={classes.msg}
              variant='subtitle2'
              component='div'
              color='textPrimary'
            >
              {message}
            </Typography>
          </CardContent>
        </CardContainer>
      </Box>
    </Box>
  );
};