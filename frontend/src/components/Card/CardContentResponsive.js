import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingRight: 0,
    '& > *': {
      paddingBottom: 16
    },
    "& > :first-child": {
      paddingBottom: 8
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
