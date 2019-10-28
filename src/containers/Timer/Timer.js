import React, { useState } from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { addTask, updateTask, deleteTask } from '../../store/Tasks/actions';
import { DATE_FORMAT, DATE_STATS_FORMAT } from '../../shared/config';
import TaskList from '../../components/TaskList/index';
import ManageTaskForm from '../../components/ManageTaskForm/index';
import Modal from '../../components/Modal/index';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import { TimerStyle, FabFixed } from './style';

const Timer = ({tasks, addTask, updateTask, deleteTask }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const taskChangeHandler = (action, data) => {
        switch(action) {
            case 'update':
                updateTask(data);
                break;
            case 'delete':
                deleteTask(data);
                break;
            default:
                return null;
        }
        
    }

    const addTaskHandler = (task) => {
        task.id = '_' + Math.random().toString(36).substr(2, 9);
        task.created_date =  moment().format(DATE_FORMAT); 
        task.start_date = null;
        task.duration = 0;
        task.stats = [
            {
                date: moment().format(DATE_STATS_FORMAT),
                duration: 0
            }
        ]
        addTask(task);
    }

    // const deleteTaskHandler = (id) => {
    //     deleteTask(id);
    // }

    return(
        <React.Fragment>
            <Tooltip title="Add new" aria-label="add">
                <FabFixed color="secondary" onClick={handleClickOpen}>
                    <AddIcon />
                </FabFixed>
            </Tooltip>
            <TimerStyle>
                <TaskList data={tasks} 
                          onTaskChange={taskChangeHandler} />
            </TimerStyle>
            <Modal open={open} onClose={handleClose} data={{title: "Manage timer"}}>
                <ManageTaskForm addTask={addTaskHandler}  />
            </Modal>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    tasks: state.tasks.taskList
});

const mapDispatchToProps = {
    addTask,
    updateTask,
    deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);