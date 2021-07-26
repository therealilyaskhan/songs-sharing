import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardContainer from './Card/CardContainer';
import CardContent from './Card/CardContent';
import { Box, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #858585'
  },
  w100: {
    width: '75%'
  },
  xs: {
    maxWidth: '444px'
  },
  sm: {
    maxWidth: '600px'
  },
  md: {
    maxWidth: '960px'
  },
  lg: {
    maxWidth: '1280px'
  },
  xl: {
    maxWidth: '1920px'
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const { children, modalOpener, fullWidth, maxWidth, ...other } = props;
  const [open, setOpen] = useState(false);
  const xs = useMediaQuery('(max-width:444px)');
  const sm = useMediaQuery('(max-width:600px)');
  const md = useMediaQuery('(max-width:740px)');
  const lg = useMediaQuery('(max-width:960px)');
  const xl = useMediaQuery('(min-width:960px)');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalOpener_ = React.cloneElement(modalOpener, { onClick: handleOpen });

  return (
    <>
      <Box my={3} textAlign="right" >
        {modalOpener_}
      </Box>
      <Modal
        {...other}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.52)',
            backdropFilter: 'blur(2px)'
          }
        }}
      >
        <Fade in={open}>
          <CardContainer
            elevation={0}
            customStyles={`${classes.paper} ${fullWidth ? classes.w100 : ''} ${maxWidth ? classes[maxWidth] : ''}`}
          >
            <CardContent
              pt={12}
              pb={12}
              pr={60}
              pl={60}
            >
              {children}
            </CardContent>
          </CardContainer>
        </Fade>
      </Modal>
    </>
  );
}
