import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingRight: 0,
    paddingBottom: 12,
    '& > *:not(:last-child)': {
      paddingBottom: theme.spacing(0.3)
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