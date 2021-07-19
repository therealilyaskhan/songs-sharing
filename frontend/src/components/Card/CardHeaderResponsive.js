import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
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
}));

export default function CardContentResponsive(props) {
  const classes = useStyles(props);
  const { children, customStyles, ...other } = props;
  return (
    <CardContent
      className={`${classes.content} ${customStyles}`}
      {...other}
    >
      {children}
    </CardContent>
  );
}