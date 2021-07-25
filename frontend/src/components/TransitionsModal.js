import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardContainer from './Card/CardContainer';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(0,0,0,0.23)'
  },
}));

export default function TransitionsModal({ children, modalOpener }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  modalOpener = React.cloneElement(modalOpener, { onClick: handleOpen });

  return (
    <>
      {modalOpener}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            customStyles={classes.paper}
          >
            <CardContent>
              {children}
            </CardContent>
          </CardContainer>
        </Fade>
      </Modal>
    </>
  );
}
