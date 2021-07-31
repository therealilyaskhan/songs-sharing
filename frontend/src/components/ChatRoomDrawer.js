import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'fixed',
    top: 64,
    left: 20,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  desktopDrawer: {
    border: 0,
    backgroundColor: '#F7F7F7'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ChatRoomDrawer({ chatRooms, setSelectedChatRoom }) {

  let drawerItems = Object.keys(chatRooms).map((category) => {

    return (
      <>
        <div>{category}</div>
        {
          chatRooms[category].map((chatRoom) => {
            return (
              <ListItem onClick={() => {
                setSelectedChatRoom(chatRoom.toLocaleLowerCase());
              }}
                button key={chatRoom}
              >
                <ListItemText primary={`# ${chatRoom}`} />
              </ListItem>
            );
          })
        }
      </>
    );

  });

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {[...drawerItems]}
      </List>
    </div>
  );


  return (
    <>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            PaperProps={{

            }}
            classes={{
              paper: `${classes.drawerPaper} ${classes.desktopDrawer}`
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </ >
  );
}