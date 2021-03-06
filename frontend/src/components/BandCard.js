import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';

import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';
import CardContentResponsive from './Card/CardContentResponsive';
import IWT from './IWT';
import StyledButton from './controls/StyledButton';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 180
  },
  flexItem1: {
    flex: '1 0 auto',
    marginRight: '2rem'
  },
  flexItem2: {
    flex: '4 0 auto',
  },
  flexItem3: {
    flex: '2 0 100%'
  },
  iwtIcon: {
    fill: "#000",
    fontSize: '1.7rem'
  },
  iwtIconExpand: {
    fontSize: '2rem'
  },
  joinBtn: {
    padding: '4px 18px',
  },
  bandDetails: {
    paddingLeft: 40,
    flexGrow: 1
  },
  textBold: {
    fontWeight: 400
  },
  textBolder: {
    fontWeight: 'bolder'
  },
  techButton: {
    fontSize: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: '5.2rem'
  },
  iwtTextSize: {
    '& > *': {
      fontSize: '1.185rem',
    }
  },
  iwtTextWeight: {
    '& > *': {
      fontWeight: 500
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(-90deg)',
  },
  widthAuto: {
    width: 'auto'
  },
  pr0: {
    paddingLeft: 0
  }
}));

export default function BandCard({ band }) {
  const { owner, photo, progress, description, techs, members } = band;
  const classes = useStyles();
  const tabletCard = useMediaQuery('(max-width:800px)');
  const ipadCard = useMediaQuery('(max-width:740px)');
  const mobileCard = useMediaQuery('(max-width:640px)');
  const xsCard = useMediaQuery('(max-width:470px)');
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const joinBandHandler = (e) => {
    console.log('band joined!!');
  };
  const techHandler = (e) => {
    console.log('tech created!!');
  };

  return (
    <CardContainer
      responsive
      elevation={3}
      pr={40}
      pl={40}
      pt={10}
      pb={10}
      customStyles={classes.card}
    >
      <Box
        alignSelf="center"
        display={ipadCard ? 'none' : 'block'}
      >
        <CardAvatarResponsive
          src={photo}
          alt="band photo"
          aria-label="band photo"
          size={136}
        />
      </Box>

      <CardContentResponsive
        customStyles={ipadCard ? classes.pr0 : classes.bandDetails}
      >
        <Box
          display="flex"
          alignItems="center"
          flexWrap={xsCard ? 'wrap' : 'no-wrap'}
          {...xsCard ? { justifyContent: 'center' } : {}}
        >
          <Box
            alignSelf="center"
            display={ipadCard ? 'block' : 'none'}
          >
            <CardAvatarResponsive
              src={photo}
              alt="band photo"
              aria-label="band photo"
            />
          </Box>
          <Box
            display="flex"
            flexGrow={1}
            flexWrap={mobileCard ? "wrap" : "no-wrap"}
            {... (ipadCard && !mobileCard) ? { alignSelf: 'stretch' } : {}}
            {... (ipadCard && !mobileCard) ? { alignItems: 'center' } : {}}
            {...xsCard ? { flexBasis: '100%' } : {}}
            ml={(mobileCard && !xsCard) ? 3.5 : 0}
            {...xsCard ? { mt: 3.5 } : {}}
            {...xsCard ? { justifyContent: 'center' } : {}}
            {...xsCard ? { textAlign: 'center' } : {}}
          >
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              flexGrow={2}
              mr={ipadCard ? 0 : 6}
              ml={(ipadCard && !mobileCard) ? 3.5 : 0}
              {...ipadCard ? { flexBasis: '100%' } : {}}
            >
              <Box
                mr={ipadCard ? 0 : 4}
                flexGrow={ipadCard ? 0 : 1}
                {...ipadCard ? { flexBasis: '100%' } : {}}
              >
                <Typography
                  className={classes.textBolder}
                  display='inline'
                  variant="subtitle2"
                >
                  Started By
                </Typography>
                <Typography
                  display='inline'
                  variant="subtitle2"
                >
                  {'  ' + owner}
                </Typography>
              </Box>
              <Box
                flexGrow={ipadCard ? 0 : 1}
                {...ipadCard ? { flexBasis: '100%' } : {}}
              >
                <Typography
                  className={classes.textBolder}
                  display='inline'
                  variant="subtitle2"
                >
                  Progress
                </Typography>
                <Typography
                  display='inline'
                  variant="subtitle2"
                >
                  {'  ' + progress + '%'}
                </Typography>
              </Box>
            </Box>
            <Box
              flexGrow={0}
              alignSelf="flex-start"
              {...!xsCard ? { mr: 0.85 } : {}}
              {...xsCard ? { mt: 1.8 } : {}}
              {... (mobileCard && !xsCard) ? { flexBasis: '100%' } : {}}
            >
              <IWT
                button
                text={members + '/5'}
                textSizeRule={classes.iwtTextSize}
                textWeightRule={classes.iwtTextWeight}
              >
                <PersonIcon classes={{ root: classes.iwtIcon }} />
              </IWT>
            </Box>
          </Box>
        </Box>
        <Box
          mb="auto"
          mr={ipadCard ? 0 : 14}
          {...(ipadCard && !xsCard) ? { mt: 1.5 } : {}}
          {...xsCard ? { textAlign: 'justify' } : {}}
        >
          <Typography variant="body2" color="textPrimary">
            {description}
          </Typography>
        </Box>
        {
          (tabletCard && !ipadCard) || mobileCard ?
            <Box display="flex"
              justifyContent={xsCard ? "center" : "space-between"}
              alignItems="center"
              flexWrap={xsCard ? 'wrap' : 'no-wrap'}
            >
              <IWT
                customStyles={classes.widthAuto}
              >
                <IconButton
                  color="primary"
                  className={`${classes.expand} ${expanded ? classes.expandOpen : ''}`}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon classes={{ root: classes.iwtIconExpand }} />
                </IconButton>
              </IWT>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box display="flex">
                  <Box
                    {...!xsCard ? { ml: 2 } : {}}
                    {...!xsCard ? { mr: 4 } : {}}
                    {...xsCard ? { justifyContent: 'center' } : {}}
                    mt={0.45}
                    flexGrow={1}
                    flexShrink={1}
                    display="flex"
                    flexWrap="wrap"
                  >
                    {techs.map((tech) => {
                      return (
                        <Box
                          key={tech}
                          mr={1}
                          pb={1.1}
                        >
                          <StyledButton
                            disableRipple
                            disableFocusRipple
                            disableElevation
                            elevation={0}
                            variant="outlined"
                            onClick={techHandler}
                            size="small"
                            customStyles={classes.techButton}
                          >
                            {tech}
                          </StyledButton>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Collapse>

              <Box
                textAlign="right"
                {...xsCard ? { flexBasis: '100%' } : {}}
                {...xsCard ? { order: '-1' } : {}}
                {...xsCard ? { mb: 1 } : {}}
              >
                <StyledButton
                  fullWidth={xsCard ? true : false}
                  disableElevation
                  responsive
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size="large"
                  style={{ color: '#fff' }}
                  onClick={joinBandHandler}
                  customStyles={classes.joinBtn}
                >
                  JOIN
                </StyledButton>
              </Box>
            </Box> :

            <Box display="flex">
              <Typography
                variant="h5"
                color="textPrimary"
                className={classes.textBold}
              >
                Tech
              </Typography>
              <Box
                ml={2}
                mt={0.45}
                mr={4}
                flexGrow={1}
                flexShrink={1}
                display="flex"
                flexWrap="wrap"
              >
                {techs.map((tech) => {
                  return (
                    <Box
                      key={tech}
                      mr={1}
                      pb={1.1}
                    >
                      <StyledButton
                        disableRipple
                        disableFocusRipple
                        disableElevation
                        elevation={0}
                        variant="outlined"
                        onClick={techHandler}
                        size="small"
                        customStyles={classes.techButton}
                      >
                        {tech}
                      </StyledButton>
                    </Box>
                  );
                })}
              </Box>
              <Box alignSelf="flex-end">
                <StyledButton
                  disableElevation
                  responsive
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size="large"
                  style={{ color: '#fff' }}
                  onClick={joinBandHandler}
                  customStyles={classes.joinBtn}
                >
                  JOIN
                </StyledButton>
              </Box>
            </Box>
        }

      </CardContentResponsive>
    </CardContainer >
  );
}