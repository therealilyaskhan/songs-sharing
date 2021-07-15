import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const styles = {
  root: {
    padding: '10px 25px 10px 25px',
    borderRadius: 10,
    marginBottom: '1.5rem',
    marginTop: '1.5rem'
  },
  'd-flex': {
    display: 'flex',
  }
};

function CardContainer(props) {
  const { classes, children, customStyles, responsive, ...other } = props;
  return (
    <Card
      className={`${classes.root} ${customStyles} ${responsive ? classes['d-flex'] : ''}`}
      {...other}
    >
      {children}
    </Card >
  );
}

export default withStyles(styles)(CardContainer);