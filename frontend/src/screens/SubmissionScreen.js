import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BandCard from '../components/BandCard';
import Photo from '../assets/images/band__photo.jpg';

export default function SubmissionScreen() {


  //fetch submission name, submission photo URi, submission members, submission completion-on date and other submission info from api endpoint
  const submissions = [
    {
      ID: '1',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '21 june 2021',
      techs: ['Designer', 'Guitar', 'Drums', 'Bass']
    },
    {
      ID: '2',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '21 june 2021',
      techs: ['Designer', 'Guitar', 'Drums', 'Golang']
    },
    {
      ID: '3',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '21 june 2021',
      techs: ['Designer', 'Guitar', 'Drums', 'Bass']
    },
    {
      ID: '4',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '21 june 2021',
      techs: ['Designer', 'Guitar', 'Drums', 'Golang']
    },
    {
      ID: '5',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '21 june 2021',
      techs: ['Designer', 'Guitar', 'Drums', 'Golang']
    },
    {
      ID: '6',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '21 june 2021',
      techs: ['Designer', 'Guitar', 'Drums', 'Bass']
    },
  ];

  return (

    <Container>

      <Container>
        <Grid item xs={12}>
          {
            submissions.map((submission) => {
              return (
                <BandCard
                  key={submission.ID}
                  submission={submission} />
              );
            })
          }
        </Grid>
      </Container>
    </Container>

  );
}
