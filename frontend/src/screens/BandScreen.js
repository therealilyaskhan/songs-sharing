import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BandCard from '../components/BandCard';
import Photo from '../assets/images/band__photo.jpg';
import CreateBandModal from './CreateBandModal';

export default function BandScreen() {


  //fetch band name, band photo URi, band owner and other band info from api endpoint
  const bands = [
    {
      ID: '1',
      owner: 'Kannaj',
      photo: Photo,
      progress: 65,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it.",
      techs: ['Designer', 'Guitar', 'Drums', 'Bass'],
      members: 3
    },
    {
      ID: '2',
      owner: 'Kannaj',
      photo: Photo,
      progress: 65,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      techs: ['Designer', 'Guitar', 'Drums', 'Golang'],
      members: 3
    },
    {
      ID: '3',
      owner: 'Kannaj',
      photo: Photo,
      progress: 65,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing.",
      techs: ['Designer', 'Guitar', 'Drums', 'Bass'],
      members: 3
    },
    {
      ID: '4',
      owner: 'Kannaj',
      photo: Photo,
      progress: 65,
      description: "I want to play high on fire with 12 musicians.",
      techs: ['Designer', 'Guitar', 'Drums', 'Golang'],
      members: 3
    },
    {
      ID: '5',
      owner: 'Kannaj',
      photo: Photo,
      progress: 65,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it.",
      techs: ['Designer', 'Guitar', 'Drums', 'Bass'],
      members: 3
    },
    {
      ID: '6',
      owner: 'Kannaj',
      photo: Photo,
      progress: 65,
      description: "I want to play high on fire with 12 musicians. lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. I want to play high on fire with 12 musicians and keep doing it.",
      techs: ['Designer', 'Guitar', 'Drums', 'Bass'],
      members: 3
    },
  ];

  return (

    <Container>

      <Container>
        <Grid item xs={12}>
          <CreateBandModal />
        </Grid>
        <Grid item xs={12}>
          {
            bands.map((band) => {
              return (
                <BandCard
                  key={band.ID}
                  band={band} />
              );
            })
          }

        </Grid>
      </Container>
    </Container>

  );
}
