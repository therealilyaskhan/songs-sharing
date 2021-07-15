import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    AlignItems: 'stretch',
    AlignContent: 'stretch',
    paddingRight: 0,
    paddingTop: 12,
    paddingBottom: 12,
    '&:last-child': {
      paddingBottom: 12
    }
  },
};

function CardControlsResponsive(props) {
  const { classes, children, customStyles, ...other } = props;
  return (
    <CardContent
      className={`${classes.content} ${customStyles}`}
      {...other}
    >
      {children}
    </CardContent>
  );
}

export default withStyles(styles)(CardControlsResponsive);