import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContainer from './Card/CardContainer';
import IWT from './IWT';
import CardContentSimple from './Card/CardContentSimple';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import StyledButton from './controls/StyledButton';
import List from '@material-ui/core/List';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles({
  title: {
    fontWeight: 700
  },
  iwt__icon: {
    fontSize: '1.35rem'
  },
  ul: {
    padding: '0px'
  },
  iwtTextSize: {
    '& > *': {
      fontSize: '1.1rem',
    }
  }
});


export default function ChecklistCard({ checklist }) {
  const classes = useStyles();


  const checklistHandler = (e) => {
    console.log(e.target);
  };

  return (
    <CardContainer elevation={3}>
      <CardContentSimple>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h6"
          component="h2"
        >
          Tasks
        </Typography>

        <List className={classes.ul}>
          {checklist.map((task) => {
            return (
              <IWT
                button
                key={task.ID}
                text={task.name}
                onClick={checklistHandler}
                textSizeRule={classes.iwtTextSize}
              >
                <DoneOutlineIcon
                  color="secondary"
                  classes={{ root: classes.iwt__icon }}
                />
              </IWT>
            );
          })}
        </List>

      </CardContentSimple>
      <CardActions>
        <StyledButton
          variant="contained"
          disabled
        >
          Submit
        </StyledButton>
      </CardActions>
    </CardContainer>
  );
}
