import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

import StyledButton from './controls/StyledButton';
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
    flex: '3.5 1 0',
    display: 'flex',
    flexDirection: 'column'
  },
  border: {
    border: '1px solid #707070'
  },
  negMT: {
    marginTop: '-6px'
  },
  cardButton: {
    flexGrow: max950 => max950 ? 1 : 0,
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    },
    '&:not(:last-child)': {
      marginBottom: max950 => max950 ? 0 : '.4rem',
      marginRight: max950 => max950 ? '.6rem' : 0
    }
  },
  floated: {
    float: 'left',
    shapeOutside: 'circle()',
    marginRight: '3rem'
  },
  textCenter: {
    textAlign: 'center'
  }
}));

export default function GenreSubscribedCard({ genre }) {

  const max1060 = useMediaQuery('(max-width:1060px)');
  const max1035 = useMediaQuery('(max-width:1035px)');
  const max960 = useMediaQuery('(max-width:960px)');
  const max920 = useMediaQuery('(max-width:920px)');
  const max950 = useMediaQuery('(max-width: 950px)');

  const { title, category, image, description } = genre;
  const classes = useStyles(max950);

  const todoHandler = (e) => {
    console.log('todo list!!');
  };
  const chatHandler = (e) => {
    console.log('chat started!!');
  };

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
        !max950 ?
          <Box alignSelf='center' flexGrow={0} mr={5}>
            <CardAvatarResponsive
              src={image}
              alt="genre image"
              aria-label="genre image"
              size={126}
              centered
              customStyles={classes.border}
            />
          </Box> :
          null
      }

      <CardContentSimple
        pt={max1035 ? 30 : 42}
        pr={0}
        pb={max1035 ? 30 : 42}
        pl={0}
        mr={(4 * 8)}
        {...max950 ? {} : { customStyles: classes.flexColumn }}
      >
        {
          max950 ?
            <Box>
              <CardAvatarResponsive
                src={image}
                alt="genre image"
                aria-label="genre image"
                size={126}
                centered
                customStyles={classes.border}
              />
            </Box> :
            null
        }

        <Box mt={0.3}>
          <Typography
            className={classes.weightBold}
            variant="h6"
            component="h4"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color='textSecondary'
            className={`${classes.weightBold} ${max950 ? classes.textCenter : classes.negMT}`}
          >
            {category}
          </Typography>
        </Box>

        {
          !max950 ?
            <Box>
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

      <Box
        flexGrow={1}
        flexShrink={2}
        flexBasis={0}
        py={2.5}
        {...max950 ? { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } : { mt: 'auto' }}
      >
        {
          max950 ?
            <Box pt={.5}>
              <Typography
                color='textPrimary'
                className={classes.weight400}
              >
                {description}
              </Typography>
            </Box>
            :
            null
        }
        <Box
          display='flex'
          flexDirection={max950 ? 'row' : 'column'}
          justifyContent={max950 ? 'stretch' : 'flex-end'}
          alignItems={max950 ? 'center' : 'flex-end'}
          mt='1.1rem'
          mb='0.5rem'
        >
          <StyledButton
            disableElevation
            startIcon={<FormatListBulletedIcon />}
            classes={{
              startIcon: classes.btnStartIcon
            }}
            onClick={todoHandler}
            variant="contained"
            color="secondary"
            style={{ color: '#fff' }}
            customStyles={classes.cardButton}
          >
            Todo
          </StyledButton>
          <StyledButton
            disableElevation
            startIcon={<ChatBubbleOutlineOutlinedIcon />}
            classes={{
              startIcon: classes.btnStartIcon
            }}
            onClick={chatHandler}
            variant="contained"
            color="secondary"
            style={{ color: '#fff' }}
            customStyles={classes.cardButton}
          >
            Chat
          </StyledButton>
        </Box>
      </Box>
    </CardContainer >
  );
};