import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: props => (props.pt === 0 || props.pt) ? `${props.pt}px` : 20,
    marginBottom: props => (props.pb === 0 || props.pb) ? `${props.pb}px` : 20,
    "& fieldset": {
      borderRadius: props => (props.br === 0 || props.br) ? `${props.br}px` : 6,
    }
  }
}));

export default function FormTextField(props) {
  const classes = useStyles(props);
  const { customStyles, ...other } = props;
  return (
    <TextField
      className={`${classes.root} ${customStyles ? customStyles : ''}`}
      {...other}
    />
  );
};