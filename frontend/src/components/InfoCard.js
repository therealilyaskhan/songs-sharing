import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContainer from './Card/CardContainer';
import IWT from './IWT';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  iwt__icon: {
    fill: "#000",
    fontSize: '0.85rem'
  },
  'pb-0': {
    paddingBottom: 0
  },
  title: {
    fontWeight: 700
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


export default function InfoCard({ objective, tasks }) {
  const classes = useStyles();

  return (
    <CardContainer elevation={3}>
      <CardContent classes={{ root: classes['pb-0'] }}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h6"
          component="h2"
        >
          Objective
        </Typography>
        <Typography>
          {objective}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          className={classes.title}
          variant="h6"
          component="h2"
        >
          Tasks
        </Typography>

        <List className={classes.ul}>
          {tasks.map((task) => {
            return (
              <IWT
                button
                key={task.ID}
                text={task.name}
                textSizeRule={classes.iwtTextSize}
              >
                <FiberManualRecordIcon classes={{ root: classes.iwt__icon }} fontSize="small" />
              </IWT>
            );
          })}
        </List>

      </CardContent>
    </CardContainer>
  );
}
