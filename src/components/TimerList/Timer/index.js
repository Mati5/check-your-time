import React, { useState } from 'react';
import * as moment from 'moment';
import { DATE_FORMAT, DURATION_FORMAT, DATE_STATS_FORMAT } from '../../../shared/config';
import { useInterval } from '../../../utils/useInterval';

import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import InfoIcon from '@material-ui/icons/Info';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

import { TimerStyle } from './style';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <Box role="tabpanel"
             hidden={value !== index}
             id={`simple-tabpanel-${index}`}
             aria-labelledby={`simple-tab-${index}`}
             {...other}  p={3} width="100%">{children}</Box>
    );
}

const Timer = (props) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [counter, setCounter] = useState(0);
    const [tabPanel, setTabPanel] = useState(0);

    useInterval(() => { 
        setCounter(counter+1);   
    }, timerStarted ? 1000 : null);


    const handleChangeTab = (event, newValue) => {
        setTabPanel(newValue);
    };
 
    const currentDurration = () => {
        return moment().diff(moment(props.timer.start_date, DATE_FORMAT), 'ms');
    }

    const showDuration = () => {
        if(props.timer.start_date) {
            return moment.utc(currentDurration() + props.timer.totalDuration).format(DURATION_FORMAT);
          }
          else {
            return moment.utc(props.timer.totalDuration).format(DURATION_FORMAT)
          }
    };

    const startTimer = () => {
        setTimerStarted(true);
        props.timer.start_date = moment().format(DATE_FORMAT);
    };

    const endTimer = () => {
        const currentDurrationTimer = currentDurration();
        setTimerStarted(false);
        const currentDate = moment().format(DATE_STATS_FORMAT);
        const index = props.timer.DaySessions.findIndex((el) => moment(el.date).format(DATE_STATS_FORMAT) === currentDate);
        props.timer.totalDuration += currentDurrationTimer;
        props.timer.start_date = null;

        if(index > -1) {
            props.timer.DaySessions[index].duration += currentDurrationTimer;

            props.onTimerChange('updateDaySession', props.timer.DaySessions[index]); 
        } else {
            const el = {
                date: moment(),
                duration: currentDurrationTimer,
                TimerId: props.timer.id
            }
            props.onTimerChange('newDaySession', el);
        }
    };

    const actionTimer = () => {
        if(timerStarted) {
            endTimer();
        } else {
            startTimer();
        }
    }

    const deleteTimer = () => {
        props.onTimerChange('delete', props.timer.id);
    }

    const editTimer = () => {
        props.displayEditTimerModal(props.timer);
    }

    return (
        <TimerStyle>
            <TimerStyle.Header>
                <TimerStyle.Title>
                    {props.timer.title}
                </TimerStyle.Title>
            </TimerStyle.Header>
            {timerStarted && <LinearProgress />}
            <TimerStyle.Content>
                <TabPanel value={tabPanel} index={0}>
                    <TimerStyle.Controls>
                        <TimerStyle.ControlsList>
                            <TimerStyle.ControlsList.Element>
                                <Fab color="primary" aria-label="start" onClick={() => actionTimer()}>
                                    {timerStarted ? 'Stop': 'Start'}
                                </Fab>
                            </TimerStyle.ControlsList.Element>
                            <TimerStyle.ControlsList.Element>
                                <Tooltip title="Edit timer" aria-label="edit">
                                    <Fab color="secondary" aria-label="edit" onClick={() => editTimer(props.timer)}>
                                        <EditIcon />
                                    </Fab>
                                </Tooltip>
                            </TimerStyle.ControlsList.Element>
                            <TimerStyle.ControlsList.Element>
                                <Tooltip title="Delete timer" aria-label="delete">
                                    <Fab aria-label="delete" onClick={() => deleteTimer()}>
                                        <DeleteIcon />
                                    </Fab>
                                </Tooltip>
                            </TimerStyle.ControlsList.Element>
                            {/* <TimerStyle.ControlsList.Element>
                                <Tooltip title="Open details" aria-label="details">
                                    <Fab style={{backgroundColor: "#24a0ed", color: "#fff"}}>
                                        <InfoIcon />
                                    </Fab>
                                </Tooltip>
                            </TimerStyle.ControlsList.Element> */}
                        </TimerStyle.ControlsList>
                        <TimerStyle.CurrentTime>
                            <input type="hidden" value={counter} />
                            <p>{currentDurration() ? moment.utc(currentDurration()).format(DURATION_FORMAT) : '00:00:00'}</p>
                        </TimerStyle.CurrentTime> 
                    </TimerStyle.Controls>
                </TabPanel>
                <TabPanel value={tabPanel} index={1}>
                    <TimerStyle.Details>   
                        <p><strong>Created date</strong>: {moment(props.timer.created).format(DATE_FORMAT)}</p>
                        <p><strong>Total duration</strong>: {showDuration()}</p>
                        <p><strong>Description</strong>: {props.timer.description}</p>
                        {props.timer.DaySessions &&
                            <ul>
                                {props.timer.DaySessions.map(el => (
                                    <li key={el.id}>Date: {moment(el.date).format(DATE_STATS_FORMAT)}: {moment.utc(el.duration).format(DURATION_FORMAT)}</li>
                                ))}
                            </ul>
                        }  
                    </TimerStyle.Details>
                </TabPanel>
            </TimerStyle.Content>
            <Paper square>
                <Tabs value={tabPanel}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleChangeTab}
                      aria-label="disabled tabs example">
                    <Tab label="Main" />
                    <Tab label="Details"  />
                </Tabs>
            </Paper>
        </TimerStyle>
    );
};

export default Timer;