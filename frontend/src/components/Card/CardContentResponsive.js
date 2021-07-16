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
    '& > *': {
      paddingBottom: theme.spacing(4)
    },
    "& > :first-child": {
      paddingBottom: theme.spacing(2)
    }
  },
  padding0: {
    paddingBottom: 0,
    "& > :last-child": {
      paddingBottom: 0
    }
  }
});

function CardContentResponsive(props) {
  const { classes, children, customStyles, ...other } = props;
  return (
    <CardContent
      className={`${classes.content} ${customStyles}`}
      {...other}
      classes={{ root: classes.padding0 }}
    >
      {children}
    </CardContent>
  );
}

export default withStyles(styles)(CardContentResponsive);