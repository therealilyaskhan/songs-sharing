import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import IWT from '../components/IWT';

const useStyles = makeStyles({
  skillItem: {
    fontSize: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    padding: '5px 30px 5px 25px',
    marginBottom: 12,
    borderRadius: 50,
    border: '0.5px solid #888888'
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
  thumb: {
    width: '1.4rem',
    height: 'auto',
    cursor: 'pointer',
  },
  notLikedThumb: {
    fill: '#ffffff',
    stroke: '#333333',
  },
  likedThumb: {
    fill: '#2d86ff',
  }
});

export default function ArtistSkillItem({ skill }) {

  const classes = useStyles();
  const [liked, setLiked] = useState(false);

  const toggleLikeClass = () => {
    setLiked(!liked);
  };

  return (
    <Box
      key={skill.skillName}
      className={classes.skillItem}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <IWT
        endIcon
        text={skill.skillName}
        textSizeRule={classes.iwtTextSize}
        textWeightRule={classes.iwtWeight600}
        mrText={20}
      >
        <ThumbUpIcon
          className={`${classes.thumb} ${liked ? classes.likedThumb : classes.notLikedThumb}`}
          onClick={toggleLikeClass}
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
    </Box>
  );
}
