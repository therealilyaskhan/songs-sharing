import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SongCard from '../components/SongCard';
import Photo from '../assets/images/band__photo.jpg';

export default function SubmissionScreen() {


  //fetch submitted songs name, photo URi, members, completed song's completion-on date and other submission info from api endpoint
  const submittedSongs = [
    {
      ID: '1',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '2011-04-11',
      techs: ['Designer', 'Guitar', 'Drums', 'Bass', 'Piano']
    },
    {
      ID: '2',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '2012-05-11',
      techs: ['Designer', 'Guitar', 'Drums', 'Golang']
    },
    {
      ID: '3',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '2011-04-14',
      techs: ['Designer', 'Guitar', 'Drums', 'Bass']
    },
    {
      ID: '4',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '2021-07-28',
      techs: ['Designer', 'Guitar', 'Drums', 'Golang']
    },
    {
      ID: '5',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '2020-04-04',
      techs: ['Designer', 'Guitar', 'Drums', 'Golang']
    },
    {
      ID: '6',
      photo: Photo,
      owner: 'Kannaj',
      members: ['Kannaj', 'Linus torvalds'],
      completedOn: '2011-04-11',
      techs: ['Designer', 'Guitar', 'Drums', 'Bass']
    },
  ];

  return (

    <Container style={{ paddingTop: '2rem' }}>

      <Container>
        <Grid item xs={12}>
          {
            submittedSongs.map((song) => {
              return (
                <SongCard
                  key={song.ID}
                  song={song} />
              );
            })
          }
        </Grid>
      </Container>
    </Container>

  );
}
