import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';


// We can inject some CSS into the DOM.
const styles = (theme) => ({
  large: {
    width: theme.spacing(15.5),
    height: theme.spacing(15.5)
  },
  avatar: {
    alignSelf: 'center'
  }
});

function CardAvatarResponsive(props) {
  const { classes, children, customStyles, ...other } = props;
  return (
    <Avatar
      className={`${classes.large} ${classes.avatar} ${customStyles}`}
      {...other}
    />
  );
}

export default withStyles(styles)(CardAvatarResponsive);