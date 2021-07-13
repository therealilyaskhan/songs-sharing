import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChecklistCard from '../components/ChecklistCard';
import ButtonAppBar from '../components/ButtonAppBar';


export default function ChecklistScreen() {


  //fetch the todo items from api endpoint
  const checklist = [
    {
      name: 'Task one',
      ID: '1'
    },
    {
      name: 'Task pick all papers',
      ID: '2'
    },
    {
      name: 'Task three',
      ID: '3'
    },
    {
      name: 'Task pick all papers',
      ID: '4'
    },
    {
      name: 'Task five',
      ID: '5'
    },
    {
      name: 'Task pick all papers',
      ID: '6'
    },
  ];

  return (

    <Container>
      <Grid item xs={12}>
        <ButtonAppBar />
      </Grid>
      <Grid item xs={12}>
        <ChecklistCard checklist={checklist} />
      </Grid>
    </Container>

  );
}
