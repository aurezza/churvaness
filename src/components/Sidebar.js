import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            description: '',
            priority: '',
            author: '',
            assignees: '',
            startDate: '',
            dueDate: '',
            status: '',
            name: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTaskOnSubmit = this.handleTaskOnSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log('add task form input changed');
        });
    }

    handleTaskOnSubmit(e) {
        e.preventDefault();
        let newTask = {
            id: Date.now(),
            name: this.state.name,
            description: this.state.description,
            priority: this.state.priority,
            author: this.state.author,
            assignees: this.state.assignees,
            startDate: this.state.startDate,
            dueDate: this.state.dueDate,
            status: this.state.status
        }
        this.props.addTask(newTask);
        this.setState({
            description: '',
            priority: '',
            author: '',
            assignees: '',
            startDate: '',
            dueDate: '',
            status: '',
            name: ''
        }, () => {
            console.log('existing tasks: ', this.props.task);
        });
    }


    render(){
        return (
            <div className="sidebar">
               <form onChange={this.handleInputChange}>
                <input type="text" name="name" value={this.state.name} placeholder="Task name" />

                <textarea name="description" cols="19" rows="10" value={this.state.description} placeholder="Task description"></textarea>


                <input type="text" name="priority" value={this.state.priority} placeholder="Priority"/>
                <input type="text" name="author" value={this.state.author} placeholder="Author"/>
                <input type="text" name="assignees" value={this.state.assignees} placeholder="Assigness"/>
                <input type="date" name="startDate" value={this.state.startDate}placeholder="Start Date"/>
                <input type="date" name="dueDate" value={this.state.dueDate} placeholder="Due Date"/>

                <br/><button onClick={this.handleTaskOnSubmit}>Add </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        task: state.tasks
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addTask: addTask
        }, dispatch 
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);