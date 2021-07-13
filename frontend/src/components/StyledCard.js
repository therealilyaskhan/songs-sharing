import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const styles = {
  root: {
    padding: '10px 0px 5px 25px',
    borderRadius: 8,
    marginBottom: '1.25rem'
  },
};

function StyledCard(props) {
  const { classes, children, customStyles, ...other } = props;
  return (
    <Card
      className={`${classes.root} ${customStyles}`}
      {...other}
    >
      {children}
    </Card >
  );
}

export default withStyles(styles)(StyledCard);