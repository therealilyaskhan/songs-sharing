import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: props => (props.mt === 0 || props.mt) ? `${props.mt}px` : 20,
    marginBottom: props => (props.mb === 0 || props.mb) ? `${props.mb}px` : 20,
    "& fieldset": {
      borderRadius: props => (props.br === 0 || props.br) ? `${props.br}px` : 6,
      borderColor: props => props.bc || '#c4c4c4'
    }
  },
  label: {
    fontSize: 18,
    fontWeight: 400,
    color: '#011627'
  }
}));

export default function FormTextField(props) {
  const classes = useStyles(props);
  const { customStyles, ...other } = props;
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
        classes: {
          root: classes.label
        }
      }}
      className={`${classes.root} ${customStyles ? customStyles : ''}`}
      {...other}
    />
  );
};
