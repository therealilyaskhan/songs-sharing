import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: props => (props.pt === 0 || props.pt) ? `${props.pt}px` : '10px',
    paddingBottom: props => (props.pb === 0 || props.pb) ? `${props.pb}px` : '10px',
    paddingRight: props => (props.pr === 0 || props.pr) ? `${props.pr}px` : '25px',
    paddingLeft: props => (props.pl === 0 || props.pl) ? `${props.pl}px` : '25px',
    borderRadius: props => (props.br === 0 || props.br) ? `${props.br}px` : 10,
    marginBottom: props => (props.mb === 0 || props.mb) ? props.mb : '1.5rem',
    marginTop: props => (props.mt === 0 || props.mt) ? props.mt : '1.5rem',
    marginLeft: props => (props.ml === 0 || props.ml) ? props.ml : 0,
    marginRight: props => (props.mr === 0 || props.mr) ? props.mr : 0,
  },
  'd-flex': {
    display: 'flex',
  }
}));

const CardContainer = React.forwardRef((props, ref) => {
  const classes = useStyles(props);
  const { children, customStyles, responsive, ...other } = props;
  return (
    <Card
      className={`${classes.root} ${customStyles} ${responsive ? classes['d-flex'] : ''}`}
      {...other}
    >
      {children}
    </Card >
  );
});

export default CardContainer;