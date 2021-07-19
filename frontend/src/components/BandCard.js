import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';

import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';
import CardContentResponsive from './Card/CardContentResponsive';
import IWT from './IWT';
import StyledButton from './StyledButton';

import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 180,
    padding: '10px 40px 10px 40px',
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
    fontSize: theme.spacing(1.5),
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
  const { ID, owner, photo, progress, description, techs, members } = band;
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
          size={17}
        />
      </Box>

      <CardContentResponsive customStyles={ipadCard ? classes.pr0 : classes.bandDetails}>
        <Box
          display="flex"
          alignItems="center"
          flexWrap={xsCard && 'wrap'}
          justifyContent={xsCard && 'center'}
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
            flexWrap={mobileCard ? "wrap" : ""}
            alignSelf={(ipadCard && !mobileCard) && "stretch"}
            alignItems={(ipadCard && !mobileCard) && "center"}
            flexBasis={xsCard && "100%"}
            ml={(mobileCard && !xsCard) ? 3.5 : 0}
            mt={xsCard && 3.5}
            justifyContent={xsCard && 'center'}
            textAlign={xsCard && 'center'}
          >
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              flexGrow={2}
              mr={ipadCard ? 0 : 6}
              ml={(ipadCard && !mobileCard) ? 3.5 : 0}
              flexBasis={ipadCard && '100%'}
            >
              <Box
                mr={ipadCard ? 0 : 4}
                flexGrow={ipadCard ? 0 : 1}
                flexBasis={ipadCard && '100%'}
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
                flexBasis={ipadCard && '100%'}
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
              mr={!xsCard && 0.85}
              mt={xsCard && 1.8}
              flexGrow={0}
              alignSelf="flex-start"
              flexBasis={(mobileCard && !xsCard) && '100%'}
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
          mt={(ipadCard && !xsCard) && 1.5}
          textAlign={xsCard && 'justify'}
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
              flexWrap={xsCard && 'wrap'}
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
                    ml={!xsCard && 2}
                    mt={0.45}
                    mr={!xsCard && 4}
                    flexGrow={1}
                    flexShrink={1}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent={xsCard && 'center'}
                  >
                    {techs.map((tech) => {
                      return (
                        <Box mr={1} pb={1.1}>
                          <StyledButton
                            disableRipple
                            disableFocusRipple
                            disableElevation
                            elevation={0}
                            variant="outlined"
                            onClick={techHandler}
                            size="small"
                            key={tech}
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
                flexBasis={xsCard && '100%'}
                order={xsCard && '-1'}
                mb={xsCard && 1}
              >
                <StyledButton
                  fullWidth={xsCard && true}
                  elevation={0}
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
                    <Box mr={1} pb={1.1}>
                      <StyledButton
                        disableRipple
                        disableFocusRipple
                        disableElevation
                        elevation={0}
                        variant="outlined"
                        onClick={techHandler}
                        size="small"
                        key={tech}
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
                  elevation={0}
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