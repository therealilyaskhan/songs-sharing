import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 25px 10px 25px',
    borderRadius: 10,
    marginBottom: '1.5rem',
    marginTop: '1.5rem'
  },
  'd-flex': {
    display: 'flex',
  }
}));

export default function CardContainer(props) {
  const classes = useStyles(props);
  const { children, customStyles, responsive, ...other } = props;
  return (
    <Card
      className={`${classes.root} ${customStyles} ${responsive ? classes['d-flex'] : ''}`}
      {...other}
    >
      {children}
    </Card >
  );
}