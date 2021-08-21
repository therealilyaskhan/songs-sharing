import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: props => (props.mt === 0 || props.mt) ? `${props.mt}px` : 0,
    marginRight: props => (props.mr === 0 || props.mr) ? `${props.mr}px` : 0,
    marginBottom: props => (props.mb === 0 || props.mb) ? `${props.mb}px` : 0,
    marginLeft: props => (props.ml === 0 || props.ml) ? `${props.ml}px` : 0,
    paddingTop: props => (props.pt === 0 || props.pt) ? `${props.pt}px` : '16px',
    paddingBottom: props => (props.pb === 0 || props.pb) ? `${props.pb}px` : '16px',
    paddingRight: props => (props.pr === 0 || props.pr) ? `${props.pr}px` : '16px',
    paddingLeft: props => (props.pl === 0 || props.pl) ? `${props.pl}px` : '16px',
    '&:last-child': {
      paddingBottom: props => (props.pb === 0 || props.pb) ? `${props.pb}px` : '24px',
    }
  }
}));

export default function CardContentSimple(props) {
  const classes = useStyles(props);
  const { children, customStyles, ...other } = props;
  return (
    <CardContent
      className={`${classes.root} ${customStyles ? customStyles : ''}`}
      {...other}
    >
      {children}
    </CardContent >
  );
};