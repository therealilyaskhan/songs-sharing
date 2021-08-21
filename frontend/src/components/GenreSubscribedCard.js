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
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    },
    '&:not(:last-child)': {
      marginBottom: '.4rem'
    }
  },
}));

export default function GenreSubscribedCard({ genre }) {
  const { title, category, image, description } = genre;
  const classes = useStyles();

  const xl = useMediaQuery('(max-width:1060px)');
  const lg = useMediaQuery('(max-width:1035px)');
  const md = useMediaQuery('(max-width:960px)');
  const sm = useMediaQuery('(max-width:900px)');
  const xsCard = useMediaQuery('(max-width:470px)');

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
      mr={sm ? 6 : md ? 10 : lg ? 28 : xl ? 36 : 50}
      mb={20}
      ml={0}
      customStyles={classes.minHeight}
    >
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

      <CardContentSimple
        pt={lg ? 30 : 42}
        pr={0}
        pb={lg ? 30 : 42}
        pl={0}
        mr={(4 * 8)}
        customStyles={classes.flexColumn}
      >

        <Box mb={0.25}>
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
            className={`${classes.weightBold} ${classes.negMT}`}
          >
            {category}
          </Typography>
        </Box>

        <Typography
          color='textPrimary'
          className={classes.weight400}
        >
          {description}
        </Typography>
      </CardContentSimple>

      <Box
        flexGrow={1}
        flexShrink={2}
        flexBasis={0}
        display='flex'
        flexDirection='column'
        justifyContent='flex-end'
        alignItems='flex-end'
        py={2.5}
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

    </CardContainer >
  );
};