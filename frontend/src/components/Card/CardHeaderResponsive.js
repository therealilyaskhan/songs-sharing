import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingRight: 0,
    paddingBottom: 12,
    '& > *': {
      paddingBottom: theme.spacing(1.5)
    }
  },
});

function CardContentResponsive(props) {
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

export default withStyles(styles)(CardContentResponsive);