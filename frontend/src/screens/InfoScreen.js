import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../components/InfoCard';


export default function InfoScreen() {

  //fetch the objective and tasks for info tab from api
  const objective = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.";
  const tasks = [
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
        <InfoCard
          objective={objective}
          tasks={tasks}
        />
      </Grid>
    </Container>

  );
}
