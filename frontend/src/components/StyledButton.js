import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    //define custom styles here to alter the look of standard MUI Button Component
  },
};

function StyledButton(props) {
  const { classes, children, customStyles, responsive, fullWidth, ...other } = props;
  const xs = useMediaQuery('(min-width:0px)');
  const sm = useMediaQuery('(max-width:424px)');
  const md = useMediaQuery('(min-width:425px)');
  const lg = useMediaQuery('(max-width:599px)');

  const StyledButton = (
    <Button
      className={`${classes.root} ${customStyles}`}
      {...other}
      fullWidth={fullWidth ? true : responsive ? (xs && sm) ? true : false : false}
    >
      {children || 'button'}
    </Button >
  );

  if (responsive) {
    return (
      <Box textAlign={responsive && (md && lg) ? 'center' : ''}>
        <Button
          className={`${classes.root} ${customStyles}`}
          {...other}
          fullWidth={fullWidth ? true : responsive ? (xs && sm) ? true : false : false}
        >
          {children || 'button'}
        </Button >
      </Box>
    );
  }

  return StyledButton;

}

export default withStyles(styles)(StyledButton);