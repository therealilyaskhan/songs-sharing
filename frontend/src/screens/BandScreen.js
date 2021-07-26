import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BandCard from '../components/BandCard';
import StyledButton from '../components/StyledButton';
import Photo from '../assets/images/band__photo.jpg';
import TransitionsModal from '../components/TransitionsModal';
import { makeStyles, TextField, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    "& fieldset": {
      borderRadius: 12
    }
  },
  createBand: {
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '10px 20px',
    minWidth: '9.2rem'
  }
});

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

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const xl = useMediaQuery('(min-width:1281px)');

  const createBandHandler = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details);
    }
  };

  return (

    <Container>

      <Container>
        <Grid item xs={12}>
          <TransitionsModal
            fullWidth
            maxWidth={xl ? 'lg' : 'md'}
            aria-labelledby="create-band-modal"
            aria-describedby="provide-your-band-description-and-tech-stack-to-create-your-band"
            modalOpener={
              <StyledButton
                disableElevation
                responsive
                variant="contained"
                color="secondary"
                type="button"
                style={{ color: '#fff' }}
                size="large"
              >
                Create Band
              </StyledButton>
            }
          >
            <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
            >
              <Box textAlign='center' fontWeight="fontWeightBold" mb={5}>
                Create a new band
              </Box>
            </Typography>

            <form
              noValidate autoComplete="off"
              onSubmit={createBandHandler}
            >
              <TextField
                className={classes.field}
                onChange={(e) => setDetails(e.target.value)}
                label="Description:"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                color="secondary"
                multiline
                rows={7}
                fullWidth
                required
                error={detailsError}
              />
              <TextField
                className={classes.field}
                onChange={(e) => setTitle(e.target.value)}
                label="Tech Stack:"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                color="secondary"
                fullWidth
                required
                error={titleError}
              />

              <Box textAlign="center" >
                <StyledButton
                  customStyles={classes.createBand}
                  disableElevation
                  responsive
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{ color: '#fff' }}
                  size="large"
                >
                  Create
                </StyledButton>
              </Box>
            </form>

          </TransitionsModal>
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
