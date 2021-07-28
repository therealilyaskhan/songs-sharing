import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';

import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';
import CardContentResponsive from './Card/CardContentResponsive';
import StyledButton from './controls/StyledButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 180
  },
  iwtIconExpand: {
    fontSize: '2rem'
  },
  viewBtn: {
    padding: '6px 16px',
  },
  songDetails: {
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
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(-90deg)',
  },
  expandMoreIcon: {
    width: 'auto'
  },
  pl0: {
    paddingLeft: 0
  }
}));

export default function SongCard({ song }) {
  const { ID, photo, owner, members, completedOn, techs } = song;
  const classes = useStyles();

  const tabletCard = useMediaQuery('(max-width:820px)');
  const ipadCard = useMediaQuery('(max-width:740px)');
  const mobileCard = useMediaQuery('(max-width:640px)');
  const xsCard = useMediaQuery('(max-width:470px)');

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const viewSongHandler = (e) => {
    console.log('song viewed!!');
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

      {/* first section */}
      <Box
        alignSelf="center"
        display={ipadCard ? 'none' : 'block'}
      >
        <CardAvatarResponsive
          src={photo}
          alt="song photo"
          aria-label="song photo"
          size={17}
        />
      </Box>

      {/* last section and is a col flex container*/}
      <CardContentResponsive
        customStyles={ipadCard ? classes.pl0 : classes.songDetails}
      >
        {/* first in the col / top strip */}
        <Box
          minHeight='5.5rem'
          display="flex"
          alignItems={ipadCard ? 'center' : 'stretch'}
          flexGrow={1}
          flexWrap={xsCard ? 'wrap' : 'no-wrap'}
          {...xsCard ? { justifyContent: 'center' } : {}}
        >
          <Box
            alignSelf="center"
            display={ipadCard ? 'block' : 'none'}
          >
            <CardAvatarResponsive
              src={photo}
              alt="song photo"
              aria-label="song photo"
            />
          </Box>
          <Box
            display="flex"
            flexDirection='column'
            flexGrow={1}
            {...xsCard ? { flexBasis: '100%' } : {}}
            ml={((mobileCard || ipadCard) && !xsCard) ? 4 : 0}
            {...xsCard ? { mt: 3.5 } : {}}
            {...xsCard ? { justifyContent: 'center' } : {}}
            {...xsCard ? { textAlign: 'center' } : {}}
          >
            <Box
              flexGrow={1}
              {...ipadCard && !mobileCard ? { mb: 1.5 } : {}}
              {...mobileCard ? { mb: 1, display: 'flex', flexDirection: 'column' } : {}}
              {...xsCard ? { mb: 1.2 } : {}}
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
                {!mobileCard ? <>&nbsp;&nbsp;</> : ''}
                {owner}
              </Typography>
            </Box>

            <Box
              flexGrow={1}
              {...ipadCard && !mobileCard ? { mb: 1.5 } : {}}
              {...mobileCard ? { mb: 1, display: 'flex', flexDirection: 'column' } : {}}
              {...xsCard ? { mb: 1.2 } : {}}
            >
              <Typography
                className={classes.textBolder}
                display='inline'
                variant="subtitle2"
              >
                Members
              </Typography>
              <Typography
                display='inline'
                variant="subtitle2"
              >
                {!mobileCard ? <>&nbsp;&nbsp;</> : ''}
                {members.join(' , ')}
              </Typography>
            </Box>

            <Box
              flexGrow={1}
              {...mobileCard ? { display: 'flex', flexDirection: 'column' } : {}}
            >
              <Typography
                className={classes.textBolder}
                display='inline'
                variant="subtitle2"
              >
                Completed on
              </Typography>
              <Typography
                display='inline'
                variant="subtitle2"
              >
                {!mobileCard ? <>&nbsp;&nbsp;</> : ''}
                {moment(new Date(completedOn)).format("Do MMMM, dddd, YYYY")}
              </Typography>
            </Box>

          </Box>
        </Box>

        {/* second in the col */}
        {
          (tabletCard && !ipadCard) || mobileCard ?
            <Box
              {...mobileCard && !xsCard ? { mt: 2 } : {}}
              display="flex"
              justifyContent={xsCard ? "center" : "space-between"}
              alignItems="center"
              flexWrap={xsCard ? 'wrap' : 'no-wrap'}
            >

              <Box
                display='flex'
                alignItems={mobileCard && !xsCard ? 'flex-start' : 'center'}
                flexDirection={mobileCard ? 'column' : 'row'}
                {...xsCard ? {} : { flexGrow: 6 }}
                flexShrink={1}
              >
                <Box
                  flexGrow={0}
                  {...mobileCard && !xsCard ? { marginLeft: '2.5rem' } : {}}
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
                </Box>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Box
                    display="flex"
                    {...xsCard ? { mb: 1 } : {}}
                  >
                    <Box
                      {...!xsCard ? { ml: 0.9 } : {}}
                      {...!xsCard ? { mr: 3.5 } : {}}
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
              </Box>

              <Box
                flexShrink={0}
                textAlign="right"
                {...xsCard ? { flexBasis: '100%' } : {}}
                {...xsCard ? { mb: 1 } : {}}
                {...xsCard ? { mt: 1 } : {}}
              >
                <StyledButton
                  fullWidth={xsCard ? true : false}
                  disableElevation
                  responsive
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size={mobileCard ? "medium" : "large"}
                  style={{ color: '#fff' }}
                  onClick={viewSongHandler}
                  customStyles={classes.viewBtn}
                >
                  View Song
                </StyledButton>
              </Box>
            </Box>
            :
            <Box
              mt={ipadCard ? 3 : 1}
              display="flex"
            >
              <Typography
                variant="h5"
                color="textPrimary"
                className={classes.textBold}
              >
                Tech
              </Typography>
              <Box
                ml={ipadCard ? 1.5 : 2}
                mr={ipadCard ? 2.5 : 4}
                mt={0.45}
                flexGrow={6}
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
              <Box
                alignSelf={ipadCard ? 'center ' : 'flex-end'}
                flexGrow={1}
                flexShrink={0}
                textAlign='right'
              >
                <StyledButton
                  disableElevation
                  responsive
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size={mobileCard ? "medium" : "large"}
                  style={{ color: '#fff' }}
                  onClick={viewSongHandler}
                  customStyles={classes.viewBtn}
                >
                  View Song
                </StyledButton>
              </Box>
            </Box>
        }

      </CardContentResponsive>
    </CardContainer >
  );
}