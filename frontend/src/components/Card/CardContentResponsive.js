import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingRight: 0,
    '& > *': {
      paddingBottom: theme.spacing(2)
    },
    "& > :first-child": {
      paddingBottom: theme.spacing(1)
    }
  },
  padding0: {
    paddingBottom: 0,
    "& > :last-child": {
      paddingBottom: 0
    }
  }
}));


export default function CardContentResponsive(props) {
  const classes = useStyles(props);
  const { children, customStyles, ...other } = props;
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
