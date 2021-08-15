import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';

import CardContainer from '../components/Card/CardContainer';
import CardContentSimple from '../components/Card/CardContentSimple';
import ArtistSkillItem from '../components/ArtistSkillItem';

const useStyles = makeStyles({
  cardMinHeight: {
    minHeight: 400
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  fontStyles: {
    fontWeight: 600,
    color: '#C7C7C7',
    letterSpacing: 1
  }
});

export default function UserSkillsScreen({ skills, userFullName }) {

  const classes = useStyles();

  return (
    <Box pt={5.5} pb={7}>
      <CardContainer
        elevation={3}
        br={35}
        pt={0}
        pr={0}
        pb={0}
        pl={0}
        mt={0}
        mr={0}
        mb={0}
        ml={0}
        customStyles={classes.cardMinHeight}
      >
        <CardContentSimple
          pt={30}
          pr={40}
          pb={40}
          pl={40}
          customStyles={classes.flexColumn}
        >
          <Typography
            className={classes.fontStyles}
            variant="subtitle1"
            component="h4"
          >
            {userFullName + ' '}likes to work with ...
          </Typography>

          <Box mt={4} maxWidth='450px'>
            {
              skills.map((skill) => {
                return (
                  <ArtistSkillItem skill={skill} />
                );
              })
            }
          </Box>


        </CardContentSimple>
      </CardContainer>
    </Box>
  );
}
