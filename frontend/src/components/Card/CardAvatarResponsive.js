import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const useStyles = makeStyles((theme) => ({
  large: {
    width: props => theme.spacing(props.size) || theme.spacing(15.5),
    height: props => theme.spacing(props.size) || theme.spacing(15.5)
  },
  avatar: {
    alignSelf: 'center'
  }
}));

export default function CardAvatarResponsive(props) {
  const classes = useStyles(props);
  const { children, customStyles, centered, ...other } = props;
  return (
    <Avatar
      className={`${classes.large} ${centered && classes.avatar} ${customStyles}`}
      {...other}
    />
  );
}