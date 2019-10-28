import React, { useState, useEffect,  useRef  } from 'react';
import * as moment from 'moment';
import { DATE_FORMAT, DURATION_FORMAT, DATE_STATS_FORMAT } from '../../../shared/config';
import { TaskStyle } from './style';

import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

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

const Task = ({ item, onTaskChange }) => {
    const [task] = useState(item);
    const [timerStarted, setTimerStarted] = useState(false);
    const [counter, setCounter] = useState(0);
    const [dataList, setDataList] = useState([]);
    const [value, setValue] = React.useState(0);

    useInterval(() => { 
        setCounter(counter+1);   
    }, timerStarted ? 1000 : null);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
 
    const currentDurration = () => {
        return moment().diff(moment(task.start_date, DATE_FORMAT), 'ms');
    }

    const showDuration = () => {
        if(task.start_date) {
            return moment.utc(currentDurration() + task.duration).format(DURATION_FORMAT);
          }
          else {
            return moment.utc(task.duration).format(DURATION_FORMAT)
          }
    };

    const startTimer = () => {
        setTimerStarted(true);
        // const currentDate = moment().format(DATE_STATS_FORMAT);
        task.start_date = moment().format(DATE_FORMAT);
    };

    const endTimer = () => {
        setTimerStarted(false);
        const currentDate = moment().format(DATE_STATS_FORMAT);
        const index = task.stats.findIndex((el) => el.date === currentDate);
        if(index > -1) {
            task.stats[index].duration += currentDurration();
            dataList[index] += currentDurration();
            setDataList(dataList);
        } else {
            const el = {
                date: moment().format(DATE_STATS_FORMAT),
                duration: currentDurration()
            }
            task.stats.push(el);
        }
        task.duration += currentDurration();
        task.start_date = null;
        onTaskChange('update', task);  
    };

    const actionTimer = () => {
        if(timerStarted) {
            endTimer();
        } else {
            startTimer();
        }
    }

    const deleteTask = () => {
        onTaskChange('delete', task.id);
    }

    return (
        <TaskStyle>
            <TaskStyle.Header>
                <TaskStyle.Title>
                    {task.name}
                </TaskStyle.Title>
            </TaskStyle.Header>
            {timerStarted && <LinearProgress />}
            <TaskStyle.Content>
                <TabPanel value={value} index={0}>
                    <TaskStyle.Controls>
                        <TaskStyle.ControlsList>
                            <TaskStyle.ControlsList.Element>
                                <Fab color="primary" aria-label="start" onClick={() => actionTimer()}>
                                    {timerStarted ? 'Stop': 'Start'}
                                </Fab>
                            </TaskStyle.ControlsList.Element>
                            <TaskStyle.ControlsList.Element>
                                <Tooltip title="Edit timer" aria-label="edit">
                                    <Fab color="secondary" aria-label="edit" disabled>
                                        <EditIcon />
                                    </Fab>
                                </Tooltip>
                            </TaskStyle.ControlsList.Element>
                            <TaskStyle.ControlsList.Element>
                                <Tooltip title="Delete timer" aria-label="delete">
                                    <Fab aria-label="delete" onClick={() => deleteTask()}>
                                        <DeleteIcon />
                                    </Fab>
                                </Tooltip>
                            </TaskStyle.ControlsList.Element>
                            <TaskStyle.ControlsList.Element>
                                <Tooltip title="Open details" aria-label="details">
                                    <Fab style={{backgroundColor: "#24a0ed", color: "#fff"}}>
                                        <InfoIcon />
                                    </Fab>
                                </Tooltip>
                            </TaskStyle.ControlsList.Element>
                        </TaskStyle.ControlsList>
                        <TaskStyle.CurrentTime>
                            <input type="hidden" value={counter} />
                            <p>{currentDurration() ? moment.utc(currentDurration()).format(DURATION_FORMAT) : '00:00:00'}</p>
                        </TaskStyle.CurrentTime> 
                    </TaskStyle.Controls>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TaskStyle.Details>   
                        <p><strong>Created date</strong>: {task.created_date}</p>
                        <p><strong>Total duration</strong>: {showDuration()}</p>
                        <p><strong>Description</strong>: {task.description}</p>
                        <ul>
                            {task.stats.map(el => (
                                <li>Date: {el.date} - {moment.utc(el.duration).format(DURATION_FORMAT)}</li>
                            ))}
                        </ul>
                    </TaskStyle.Details>
                </TabPanel>
            </TaskStyle.Content>
            <Paper square>
                <Tabs value={value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleChange}
                      aria-label="disabled tabs example">
                    <Tab label="Main" />
                    <Tab label="Details"  />
                </Tabs>
            </Paper>
        </TaskStyle>
    );
};

export default Task;


export function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }