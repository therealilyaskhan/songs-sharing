import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StyledCard from './StyledCard';
import IWT from './IWT';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StyledButton from './StyledButton';
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
  }
});


export default function ChecklistCard({ checklist }) {
  const classes = useStyles();


  const checklistHandler = (e) => {
    console.log(e.target);
  };

  return (
    <StyledCard elevation={3}>
      <CardContent>
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
              >
                <DoneOutlineIcon
                  color="secondary"
                  classes={{ root: classes.iwt__icon }}
                />
              </IWT>
            );
          })}
        </List>

      </CardContent>
      <CardActions>
        <StyledButton
          variant="contained"
          disabled
        >
          Submit
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
}
