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
    paddingLeft: 5,
    marginTop: 3
  }
};



function IWT({ classes, text, children, textBold, customStyles, textSizeRule, textWeightRule, ...other }) {

  return (
    <ListItem
      className={`${classes.li} ${customStyles}`}
      {...other}
      disableRipple={true}
    >
      <ListItemIcon className={classes.listIcon}>
        {children || null}
      </ListItemIcon>
      <ListItemText
        className={`${classes.listText} ${textBold ? classes.listTextBold : null} ${textSizeRule} ${textWeightRule}`}
        classes={{ root: textSizeRule }}
        primary={text}
      />
    </ListItem>
  );
}

export default withStyles(styles)(IWT);