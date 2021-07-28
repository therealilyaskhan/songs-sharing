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
import StyledButton from './controls/StyledButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IWT from './IWT';

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
  viewBtn: {
    padding: '4px 18px',
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

export default function SongCard({ song }) {
  const { ID, photo, owner, members, completedOn, techs } = song;
  const classes = useStyles();

  const tabletCard = useMediaQuery('(max-width:800px)');
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

      {/* 1st section of flex container */}
      <Box alignSelf="center">
        {/* remove the Container Box */}
        <CardAvatarResponsive
          src={photo}
          alt="song photo"
          aria-label="song photo"
          size={17}
        />
      </Box>

      {/* second section of flex container, the second section cardcontentresponsive is a flex container itself with direction - col */}
      <CardContentResponsive
        customStyles={ipadCard ? classes.pr0 : classes.songDetails}
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
            Members
          </Typography>
          <Typography
            display='inline'
            variant="subtitle2"
          >
            {'  ' + members + '%'}
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
            Completed On
          </Typography>
          <Typography
            display='inline'
            variant="subtitle2"
          >
            {'  ' + completedOn + '%'}
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
            </Box>
            :
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
            </Box>
        }

      </CardContentResponsive>

      {/* third section of flex container */}
      <Box alignSelf="flex-end">
        <StyledButton
          disableElevation
          responsive
          variant="contained"
          color="secondary"
          type="submit"
          size="large"
          style={{ color: '#fff' }}
          onClick={viewSongHandler}
          customStyles={classes.viewBtn}
        >
          View Song
        </StyledButton>
      </Box>

    </CardContainer >
  );
}