import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 150,
    padding: '10px 40px 10px 40px',
  },
  flexItem1: {
    flex: '1 0 auto',
    marginRight: '2rem'
  },
  flexItem2: {
    flex: '4 0 auto',
  },
  iwtIcon: {
    fill: "#000",
    fontSize: '1.9rem'
  },
  joinBtn: {
    padding: '4px 18px'
  },
  bandDetails: {
    paddingLeft: 30,
    paddingRight: 30
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
    paddingRight: 15
  },
  iwtTextSize: {
    '& > *': {
      fontSize: '1.2rem',
    }
  },
  iwtTextWeight: {
    '& > *': {
      fontWeight: 500
    }
  }
}));

export default function BandCard({ band }) {
  const { ID, owner, photo, progress, description, techs, members } = band;
  const classes = useStyles();
  const theme = useTheme();

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
      <CardAvatarResponsive
        src={photo}
        alt="band photo"
        aria-label="band photo"
      />
      <CardContentResponsive customStyles={classes.bandDetails}>
        <Box display="flex" flexWrap="wrap">
          <div className={classes.flexItem1}>
            <Typography
              className={classes.textBolder}
              display='inline'
              variant="subtitle2"
            >
              Started By:
            </Typography>
            <Typography
              display='inline'
              variant="subtitle2"
            >
              {' ' + owner}
            </Typography>
          </div>
          <div className={classes.flexItem2}>
            <Typography
              className={classes.textBolder}
              display='inline'
              variant="subtitle2"
            >
              Progress:
            </Typography>
            <Typography
              display='inline'
              variant="subtitle2"
            >
              {' ' + progress + '%'}
            </Typography>
          </div>
        </Box>
        <Box mb="auto" pt={0.2}>
          <Typography variant="body2" color="textPrimary">
            {description}
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" alignItems="flex-end">
          <Typography
            variant="h5"
            color="textPrimary"
            className={classes.textBold}
          >
            Tech:
          </Typography>
          <Box
            ml={2}
            flexGrow={1}
            flexShrink={1}
            display="flex"
            flexWrap="wrap"
            alignItems="flex-end"
          >
            {techs.map((tech) => {
              return (
                <Box mr={1}>
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
      </CardContentResponsive>
      <CardControlsResponsive>
        <IWT
          button
          text={members + '/5'}
          textSizeRule={classes.iwtTextSize}
          textWeightRule={classes.iwtTextWeight}
        >
          <PersonIcon classes={{ root: classes.iwtIcon }} />
        </IWT>
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
      </CardControlsResponsive>
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
