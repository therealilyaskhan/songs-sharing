import { makeStyles } from '@material-ui/core/styles';

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
  smScreenBtn: {
    '&:not(:last-child)': {
      marginRight: '.6rem'
    },
    fontWeight: 'bold'
  },
  btnStartIcon: {
    fontWeight: 'bold'
  },
  flexCol: {
    flexDirection: 'column'
  },
  bgColor: {
    backgroundColor: theme.palette.secondary.dark,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35
  },
  smCardHeader: {
    margin: '-1px',
    paddingBottom: '1rem',
    backgroundColor: '#fff',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  textCenter: {
    textAlign: 'center'
  }
}));

export default function GenreSubscribedCardMobile({ genre }) {
  const { title, category, image, description } = genre;
  const classes = useStyles();

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
      pr={0}
      pl={0}
      pt={30}
      pb={30}
      mt={0}
      mr={0}
      mb={20}
      ml={0}
      customStyles={`${classes.minHeight} ${classes.flexCol} `}
    >
      <CardContentSimple
        pt={0}
        pr={0}
        pb={0}
        pl={0}
        mr={0}
        customStyles={`${classes.flexColumn} ${classes.bgColor}`}
      >

        <Box mb={0} className={classes.smCardHeader} >

          <Box alignSelf='center' flexGrow={0} mb={1} mr={0}>
            <CardAvatarResponsive
              src={image}
              alt="genre image"
              aria-label="genre image"
              size={135}
              centered
              customStyles={classes.border}
            />
          </Box>

          <Typography
            className={`${classes.weightBold} ${classes.textCenter}`}
            variant="h6"
            component="h4"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color='textSecondary'
            className={`${classes.weightBold} ${classes.negMT} ${classes.textCenter}`}
          >
            {category}
          </Typography>
        </Box>

        <Box
          display='flex'
          justifyContent='center'
          py={2.5}
        >
          <StyledButton
            customStyles={classes.smScreenBtn}
            startIcon={<FormatListBulletedIcon />}
            disableElevation
            classes={{
              startIcon: classes.btnStartIcon
            }}
            onClick={todoHandler}
            variant="contained"
            color="secondary"
            style={{ color: '#fff' }}
          >
            Todo
          </StyledButton>
          <StyledButton
            customStyles={classes.smScreenBtn}
            startIcon={<ChatBubbleOutlineOutlinedIcon />}
            disableElevation
            classes={{
              startIcon: classes.btnStartIcon
            }}
            onClick={chatHandler}
            variant="contained"
            color="secondary"
            style={{ color: '#fff' }}
          >
            Chat
          </StyledButton>
        </Box>
      </CardContentSimple>

      <Box mt={3.4} mb={0.5} px={4} textAlign='justify'>
        <Typography
          color='textPrimary'
          className={classes.weight400}
        >
          {description}
        </Typography>
      </Box>

    </CardContainer >
  );
};