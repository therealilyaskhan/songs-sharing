import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

import CardContainer from '../components/Card/CardContainer';
import CardContentSimple from '../components/Card/CardContentSimple';
import StyledButton from '../components/controls/StyledButton';
import IWT from '../components/IWT';

const useStyles = makeStyles({
  cardMinHeight: {
    minHeight: 400
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  fontStyles: {
    fontWeight: 600,
    color: '#C7C7C7',
    letterSpacing: 1
  },
  skillItem: {
    fontSize: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: '15.2rem'
  },
  iwtTextSize: {
    '& > *': {
      fontSize: '0.85rem',
    }
  },
  iwtWeight600: {
    '& > *': {
      fontWeight: 600
    }
  },
  weight600: {
    fontWeight: 600
  },
  kudos: {
    fontSize: 11,
    fontWeight: 400,
    marginBottom: '-4px'
  },
  thumbColor: {
    fill: '#ffffff',
    stroke: '#333333',
    width: '1.4rem',
    height: 'auto'
  }
});

export default function UserSkillsScreen({ skills, userFullName }) {

  const classes = useStyles();

  return (
    <Box mr={8} pt={5.5} pb={7}>
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
          {
            skills.map((skill) => {
              return (
                <StyledButton
                  key={skill.skillName}
                  disableRipple
                  disableFocusRipple
                  disableElevation
                  elevation={0}
                  variant="outlined"
                  size="medium"
                  customStyles={classes.skillItem}
                >
                  <IWT
                    endIcon
                    text={skill.skillName}
                    textSizeRule={classes.iwtTextSize}
                    textWeightRule={classes.iwtWeight600}
                    customStyles={classes.iwt}
                  >
                    <ThumbUpIcon
                      className={classes.thumbColor}
                    />
                  </IWT>
                  <Box ml={0.75} mr={0.4} mb={-0.25} >
                    <Typography
                      className={classes.weight600}
                      variant="subtitle2"
                    >
                      {skill.kudos}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    className={classes.kudos}
                  >
                    Kudos
                  </Typography>
                </StyledButton>
              );
            })
          }
        </CardContentSimple>
      </CardContainer>
    </Box>
  );
}
