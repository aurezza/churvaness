import React from 'react';
import { connect } from 'react-redux';
import TaskCard from './TaskCard';

const TaskTimeline = (props) => (
    <div className="task-timeline">
        <h1>Tasks</h1>
        {props.task.tasks.map(item => ( 
            <TaskCard key={item.id} task={item}/>
        ))}
        <div className="task-adjust-last"></div>
    </div>
);


function mapStateToProps(state) { 
    return ({
        task: state.tasks
    });
}


export default connect(mapStateToProps)(TaskTimeline);