import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';
import CardContentResponsive from './Card/CardContentResponsive';
import CardControlsResponsive from './Card/CardControlsResponsive';
import IWT from './IWT';
import StyledButton from './StyledButton';
import PersonIcon from '@material-ui/icons/Person';

import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
  const theme = useTheme();
  const tabletCard = useMediaQuery('(max-width:800px)');
  const ipadCard = useMediaQuery('(max-width:740px)');
  const mobileCard = useMediaQuery('(max-width:640px)');
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
        />
      </Box>
      <CardContentResponsive customStyles={ipadCard ? classes.pr0 : classes.bandDetails}>
        <Box
          display="flex"
          alignItems="center"
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
            ml={(mobileCard) ? 3.5 : 0}
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
              mr={0.85}
              flexGrow={0}
              alignSelf="flex-start"
              flexBasis={mobileCard && '100%'}
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
        <Box mb="auto" mr={ipadCard ? 0 : 14}>
          <Typography variant="body2" color="textPrimary">
            {description}
          </Typography>
        </Box>
        {
          (tabletCard && !ipadCard) || mobileCard ?
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <IWT
                customStyles={classes.widthAuto}
              >
                <IconButton
                  className={`${classes.expand} ${expanded ? classes.expandOpen : ''}`}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon classes={{ root: classes.iwtIcon }} />
                </IconButton>
              </IWT>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box display="flex">
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
                </Box>
              </Collapse>
              <Box textAlign="right">
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
    </CardContainer>
  );
}





// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
// }));

// export default function MediaControlCard() {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//     <Card className={classes.root}>
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
//           <Typography component="h5" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <div className={classes.controls}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon className={classes.playIcon} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </div>
//       </div>
//       <CardMedia
//         className={classes.cover}
//         image="/static/images/cards/live-from-space.jpg"
//         title="Live from space album cover"
//       />
//     </Card>
//   );
// }
