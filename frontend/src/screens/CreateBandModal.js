import { Box, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import FormTextField from '../components/controls/FormTextField';
import StyledButton from '../components/controls/StyledButton';
import TransitionsModal from '../components/TransitionsModal';

const useStyles = makeStyles({
  field: {
    display: 'block'
  },
  createBand: {
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '10px 20px',
    minWidth: '9.2rem'
  }
});

export default function CreateBandModal() {

  const classes = useStyles();
  const [techStack, setTechStack] = useState('');
  const [description, setDescription] = useState('');
  const [techStackError, setTechStackError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const xs = useMediaQuery('(max-width:444px)');
  const xl = useMediaQuery('(min-width:1367px)');

  //form submission validation and api calls goes here
  const createBandHandler = (e) => {
    e.preventDefault();
    setTechStackError(false);
    setDescriptionError(false);

    if (techStack === '') {
      setTechStackError(true);
    }
    if (description === '') {
      setDescriptionError(true);
    }
    if (techStack && description) {
      console.log(techStack, ' and ', description, ' submitted');
    }
  };

  return (

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
        <Box
          {...xs ? { fontSize: 21 } : {}}
          textAlign='center'
          fontWeight="fontWeightBold"
          mb={5}
        >
          Create a new band
        </Box>
      </Typography>

      <form
        noValidate autoComplete="off"
        onSubmit={createBandHandler}
      >
        <FormTextField
          br={12}
          bc='#858585'
          mb={25}
          customStyles={classes.field}
          onChange={(e) => setDescription(e.target.value)}
          label="Description:"
          variant="outlined"
          color="secondary"
          multiline
          rows={7}
          fullWidth
          required
          error={descriptionError}
        />
        <FormTextField
          br={12}
          bc='#858585'
          customStyles={classes.field}
          onChange={(e) => setTechStack(e.target.value)}
          label="Tech Stack:"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          required
          error={techStackError}
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

  );
}
