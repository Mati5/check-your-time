import React from 'react';
import Task from './Task/index';
import { TaskListStyle } from './style';

const TaskList = ({ data, onTaskChange }) => {

    return (
        <TaskListStyle>
            {data.map((item) => (
                <Task key={item.id} item={item} onTaskChange={onTaskChange} />
            ))}
        </TaskListStyle>
    );
};

export default TaskList;