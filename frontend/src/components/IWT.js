import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  li: {
    padding: '0px'
  },
  listIcon: {
    minWidth: 'auto'
  },
  listText: {
    '& > *': {
      fontSize: '1.1rem'
    }
  }
};



function IWT({ classes, text, children, ...other }) {

  return (
    <ListItem
      className={classes.li}
      {...other}
      disableRipple={true}
    >
      <ListItemIcon className={classes.listIcon}>
        {children || null}
      </ListItemIcon>
      <ListItemText
        style={{ paddingLeft: '5px' }}
        className={classes.listText}
        primary={text}
      />
    </ListItem>
  );
}

export default withStyles(styles)(IWT);