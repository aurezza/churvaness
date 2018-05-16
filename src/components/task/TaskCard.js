import React from 'react';
import TaskForm from './TaskForm';

const TaskCard = (props) => (
    <div className="task-card">
        <h3>{props.task.name}</h3>
        <TaskForm task={props.task}/>
    </div>       
)

export default TaskCard;