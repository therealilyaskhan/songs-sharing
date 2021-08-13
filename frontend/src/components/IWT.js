import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  li: {
    padding: '0px'
  },
  listIcon: {
    minWidth: 'auto'
  },
  listText: {
    paddingLeft: props => props.endIcon ? 0 : 5,
    paddingRight: props => props.endIcon ? 5 : 0
  }
}));



export default function IWT(props) {

  const { text, endIcon, children, textBold, customStyles, textSizeRule, textWeightRule, ...other } = props;

  const classes = useStyles(props);

  return (
    <ListItem
      className={`${classes.li} ${customStyles}`}
      {...other}
      disableRipple={true}
    >
      {
        !endIcon
        &&
        <ListItemIcon className={classes.listIcon}>
          {children || null}
        </ListItemIcon>
      }

      <ListItemText
        className={`${classes.listText} ${textSizeRule} ${textWeightRule}`}
        primary={text}
      />

      {
        endIcon
        &&
        <ListItemIcon className={classes.listIcon}>
          {children || null}
        </ListItemIcon>
      }
    </ListItem>
  );
}