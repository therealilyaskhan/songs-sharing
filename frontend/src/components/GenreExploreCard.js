import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CardContainer from './Card/CardContainer';
import CardAvatarResponsive from './Card/CardAvatarResponsive';
import CardContentSimple from './Card/CardContentSimple';


const useStyles = makeStyles((theme) => ({
  weightBold: {
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  weight400: {
    fontWeight: 400,
    fontSize: '0.95rem'
  },
  minHeight: {
    minHeight: 220
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexGrow: {
    flex: mediaQueries => mediaQueries.max960 ? '8 1 0' : mediaQueries.max1035 ? '6 1 0' : '4 1 0'
  },
  border: {
    border: '1px solid #707070'
  },
  negMT: {
    marginTop: '-6px'
  },
  cardButton: {
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    },
    '&:not(:last-child)': {
      marginBottom: '.4rem'
    }
  },
  textCenter: {
    textAlign: 'center'
  }
}));

export default function GenreExploreCard({ genre }) {
  const { title, category, image, description } = genre;

  const max1060 = useMediaQuery('(max-width:1060px)');
  const max1035 = useMediaQuery('(max-width:1035px)');
  const max960 = useMediaQuery('(max-width:960px)');
  const max950 = useMediaQuery('(max-width:950px)');
  const max920 = useMediaQuery('(max-width:920px)');
  const max780 = useMediaQuery('(max-width:780px)');
  const max600 = useMediaQuery('(max-width:599.95px)');
  const max520 = useMediaQuery('(max-width:520px)');

  const mediaQueries = {
    max1035,
    max960
  };

  const classes = useStyles(mediaQueries);

  return (
    <CardContainer
      responsive
      elevation={3}
      pr={30}
      pl={30}
      pt={0}
      pb={0}
      mt={0}
      mr={max920 ? 6 : max960 ? 10 : max1035 ? 28 : max1060 ? 36 : 50}
      mb={20}
      ml={0}
      customStyles={classes.minHeight}
    >
      {
        !max950
          ?
          <Box alignSelf='center' flexGrow={0} mr={5}>
            <CardAvatarResponsive
              src={image}
              alt="genre image"
              aria-label="genre image"
              size={126}
              centered
              customStyles={classes.border}
            />
          </Box>
          :
          null
      }

      <CardContentSimple
        pt={max1035 ? 30 : 42}
        pr={0}
        pb={max1035 ? 30 : 42}
        pl={0}
        mr={max780 && (!max600 || max520) ? 0 : (4 * 8)}
        customStyles={`${classes.flexColumn} ${max950 ? '' : classes.flexGrow}`}
      >
        {
          max950
            ?
            <Box>
              <CardAvatarResponsive
                src={image}
                alt="genre image"
                aria-label="genre image"
                size={126}
                centered
                customStyles={classes.border}
              />
            </Box>
            :
            null
        }

        <Box mb={max950 ? 0 : 0.25} mt={max950 ? 0.3 : 0}>
          <Typography
            className={`${classes.weightBold} ${max950 ? classes.textCenter : ''}`}
            variant="h6"
            component="h4"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color='textSecondary'
            className={`${classes.weightBold} ${classes.negMT} ${max950 ? classes.textCenter : ''}`}
          >
            {category}
          </Typography>
        </Box>

        {
          !max950 || (max780 && (!max600 || max520)) ?
            <Box {...max780 && (!max600 || max520) ? { mt: 0.6, textAlign: 'center' } : {}}>
              <Typography
                color='textPrimary'
                className={classes.weight400}
              >
                {description}
              </Typography>
            </Box> :
            null
        }

      </CardContentSimple>
      {
        !max780 || (max600 && !max520)
          ?
          <Box
            flexGrow={1}
            flexShrink={3}
            flexBasis={0}
            my='2rem'
          >
            {
              max950 ?
                <Typography
                  color='textPrimary'
                  className={classes.weight400}
                >
                  {description}
                </Typography>
                :
                null
            }
          </Box>
          :
          null
      }

    </CardContainer >
  );
};