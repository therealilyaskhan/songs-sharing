import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ChecklistCard from '../components/ChecklistCard';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';
import ButtonAppBar from '../components/ButtonAppBar';

const useStyles = makeStyles({
  screen: {
    backgroundColor: "#f9f9f9",
    width: "100%"
  }
});

export default function BuildSong() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('checklist');


  //fetch the todo items from api endpoint
  const checklist = [
    {
      name: 'Task one',
      ID: '1'
    },
    {
      name: 'Task pick all papers',
      ID: '2'
    },
    {
      name: 'Task three',
      ID: '3'
    },
    {
      name: 'Task pick all papers',
      ID: '4'
    },
    {
      name: 'Task five',
      ID: '5'
    },
    {
      name: 'Task pick all papers',
      ID: '6'
    },
  ];

  //fetch the objective and tasks for info tab from api
  //fetch the todo items from api endpoint
  const objective = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.";
  const tasks = [
    {
      name: 'Task one',
      ID: '1'
    },
    {
      name: 'Task pick all papers',
      ID: '2'
    },
    {
      name: 'Task three',
      ID: '3'
    },
    {
      name: 'Task pick all papers',
      ID: '4'
    },
    {
      name: 'Task five',
      ID: '5'
    },
    {
      name: 'Task pick all papers',
      ID: '6'
    },
  ];

  return (
    <>
      <Navbar setActiveTab={setActiveTab} />
      <div className={classes.screen}>
        <Container>
          <Grid container>
            <Container>
              <Grid item xs={12}>
                <ButtonAppBar />
              </Grid>
              <Grid item xs={12}>
                {
                  activeTab === 'checklist' ?
                    <ChecklistCard
                      checklist={checklist}
                    /> :
                    activeTab === 'info' ?
                      <InfoCard
                        objective={objective}
                        tasks={tasks}
                      /> :
                      null
                }

              </Grid>
            </Container>
          </Grid>
        </Container>
      </div>
    </>
  );
}
