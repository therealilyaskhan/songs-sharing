import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '10px 0px 5px 25px',
    borderRadius: 8
  },
  title: {
    fontWeight: 700
  },
  ul: {
    padding: '0px'
  },
  li: {
    padding: '0px'
  },
  listIcon: {
    minWidth: 'auto'
  },
  listText: {
    '& > *': {
      fontSize: '1.2rem'
    }
  }
});


export default function TodoCard({ todos }) {
  const classes = useStyles();


  const todoHandler = (e) => {
    console.log(e.target);
  };

  return (
    <Card
      className={classes.root}
      elevation={3}
    >
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h6"
          component="h2"
        >
          Tasks
        </Typography>

        <List className={classes.ul}>
          {todos.map((todo) => {
            return (
              <ListItem
                button
                disableRipple={true}
                className={classes.li}
                key={todo.taskID}
                onClick={todoHandler}
              >
                <ListItemIcon className={classes.listIcon}>
                  <DoneOutlineIcon
                    color="secondary"
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ paddingLeft: '5px' }}
                  primary={todo.taskName}
                  className={classes.listText}
                />
              </ListItem>
            );
          })}
        </List>

      </CardContent>
      <CardActions>
        <Button variant="contained" disabled>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
