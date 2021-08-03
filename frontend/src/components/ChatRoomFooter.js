import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

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
  }
});

export default function ChatRoomFooter({ chatRoomID, className }) {

  const classes = useStyles();

  const handleSend = () => {
    console.log('message sent');
  };

  return (
    <Box p={4} className={className || ''}>
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
                aria-label="send-button"
                onClick={handleSend}
              >
                <SendOutlinedIcon
                  classes={{
                    root: classes.sendIcon
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}