import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardContainer from './Card/CardContainer';
import CardContentSimple from './Card/CardContentSimple';
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
  const md = useMediaQuery('(max-width:680px)');
  const lg = useMediaQuery('(max-width:840px)');
  const xl = useMediaQuery('(max-width:975px)');

  const px = xs ? 20 : sm ? 30 : md ? 35 : lg ? 40 : xl ? 50 : 60;

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
            <CardContentSimple
              pt={12}
              pb={12}
              pr={px}
              pl={px}
            >
              {children}
            </CardContentSimple>
          </CardContainer>
        </Fade>
      </Modal>
    </>
  );
}
