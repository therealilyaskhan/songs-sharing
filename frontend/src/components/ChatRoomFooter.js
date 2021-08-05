import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  outlinedInput: {
    borderRadius: 50,
    backgroundColor: '#fff',
    '& fieldset': {
      borderRadius: 50,
      borderColor: '#c4c4c4',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#c4c4c4'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 1,
      borderColor: '#c4c4c4'
    }
  },
  textArea: {
    paddingLeft: 25,
    '&::placeholder': {
      fontSize: '15px'
    }
  },
  sendIcon: {
    fontSize: '1.8rem'
  },
  multiline: {
    paddingTop: 15,
    paddingBottom: 15
  },
  disableRipple: {
    '&:hover': {
      backgroundColor: 'unset'
    }
  }
});

export default function ChatRoomFooter({ chatRoomID, className }) {

  const classes = useStyles();
  const [text, setText] = useState('');

  //use chatRoomID to push messages into the chat room  
  const sendMsgHandler = (e) => {
    e.preventDefault();
    setText('');
    if (text === '')
      console.log("Can't send empty msg!!!");
    if (text)
      console.log('msg sent!!!');
  };

  return (
    <Box p={4} py={3} className={className || ''}>
      <form
        noValidate autoComplete="off"
        onSubmit={sendMsgHandler}
      >
        <FormControl
          variant="outlined"
          classes={{
            root: classes.outlinedInput
          }}
          hiddenLabel
          fullWidth
        >
          <OutlinedInput
            id="dm-to-room"
            classes={{
              root: classes.outlinedInput,
              inputMultiline: classes.textArea,
              multiline: classes.multiline
            }}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            fullWidth
            multiline
            rowsMax={4}
            placeholder='Say something nice ...'
            type='text'
            aria-label='message-text-box'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className={classes.disableRipple}
                  disableRipple
                  aria-label="send-button"
                >
                  <SendIcon
                    classes={{
                      root: classes.sendIcon
                    }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </Box>
  );
}