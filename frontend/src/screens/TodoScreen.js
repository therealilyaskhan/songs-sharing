import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TodoCard from '../components/TodoCard';
import Navbar from '../components/Navbar';
import ButtonAppBar from '../components/ButtonAppBar';

const useStyles = makeStyles({
  screen: {
    backgroundColor: "#f9f9f9",
    width: "100%"
  }
});

export default function Todo() {
  const classes = useStyles();

  //fetch the checklist of to-dos from api endpoint
  const todos = [
    {
      taskName: 'Task one',
      taskID: '1'
    },
    {
      taskName: 'Task pick all papers',
      taskID: '2'
    },
    {
      taskName: 'Task three',
      taskID: '3'
    },
    {
      taskName: 'Task pick all papers',
      taskID: '4'
    },
    {
      taskName: 'Task five',
      taskID: '5'
    },
    {
      taskName: 'Task pick all papers',
      taskID: '6'
    },
  ];

  return (
    <>
      <Navbar />
      <div className={classes.screen}>
        <Container>
          <Grid container>
            <Container>
              <Grid item xs={12}>
                <ButtonAppBar />
              </Grid>
              <Grid item xs={12}>
                <TodoCard todos={todos} />
              </Grid>
            </Container>
          </Grid>
        </Container>
      </div>
    </>
  );
}
