import { Box, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import FormTextField from '../components/FormTextField';
import StyledButton from '../components/StyledButton';
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
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const xl = useMediaQuery('(min-width:1281px)');

  //form submission and api calls goes here
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
      console.log(title, ' and ', details, ' submitted');
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
        <Box textAlign='center' fontWeight="fontWeightBold" mb={5}>
          Create a new band
        </Box>
      </Typography>

      <form
        noValidate autoComplete="off"
        onSubmit={createBandHandler}
      >
        <FormTextField
          br={12}
          customStyles={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          value={details}
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
        <FormTextField
          customStyles={classes.field}
          br={12}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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

  );
}
