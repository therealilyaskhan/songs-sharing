import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const useStyles = makeStyles((theme) => ({
  size: {
    width: props => props.size || 124,
    height: props => props.size || 124
  },
  avatar: {
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

export default function CardAvatarResponsive(props) {
  const classes = useStyles(props);
  const { children, customStyles, centered, ...other } = props;
  return (
    <Avatar
      className={`${classes.size} ${centered && classes.avatar} ${customStyles}`}
      {...other}
    />
  );
}