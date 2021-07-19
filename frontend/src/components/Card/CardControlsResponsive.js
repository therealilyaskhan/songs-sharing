import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
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
}));

export default function CardControlsResponsive(props) {
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