import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../../actions';

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            priority: '',
            author: '',
            assignees: '',
            startDate: '',
            dueDate: '',
            status: '',
            disabled: true
        }

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleInputEditing = this.toggleInputEditing.bind(this);
    }
    
    toggleInputEditing(e) {
        e.preventDefault();
        this.setState ({
          disabled: !this.state.disabled,
        });
    }

    handleInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let editedData = {
            id: this.props.task.id,
            name: this.state.name,
            description: this.state.description,
            priority: this.state.priority,
            author: this.state.author,
            assignees: this.state.assignees,
            startDate: this.state.startDate,
            dueDate: this.state.dueDate,
            status: this.state.status
        }

        this.props.editTask(editedData);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteTask(this.props.task.id);
    }

    render() {
        return (
            <div className="task-form">
                {console.log('currently editing: ', this.props.task.id)}
                <form onChange={this.handleInputValue}>
                <input type="text" name="name" value={this.state.name} placeholder={this.props.task.name } />
                
                <textarea name="description" cols="19" rows="1" value={this.state.description} placeholder={this.props.task.description}></textarea><br/>

                <label htmlFor="priority">Priority:</label>
                <input type="text" name="priority" value={this.state.priority} placeholder={this.props.task.priority}/>
                
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" value={this.state.author} placeholder={this.props.task.author}/>

                <label htmlFor="assignees">Assignees:</label>
                <input type="text" name="assignees" value={this.state.assignees} placeholder={this.props.task.assignees}/>
                    
                <label htmlFor="startDate">Start Date:</label>
                <input type="text" name="startDate" value={this.state.startDate} placeholder={this.props.task.startDate}/>
                
                <label htmlFor="dueDate">Due Date:</label>
                <input type="text" name="dueDate" value={this.state.dueDate} placeholder={this.props.task.dueDate}/>

                    <div className="button-wrapper">
                        <button 
                        className={this.state.disabled ?  "task-edit" : "task-save"} 
                        onClick={(e) => {
                            this.handleSubmit(e);
                            this.toggleInputEditing(e)}}>
                            {this.state.disabled ?  "Finalize Edit" : "Save Edit"}
                        </button>

                        <button className="task-delete" onClick={this.handleDelete}>Archive Task</button>  
                    </div>
                </form>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteTask: deleteTask,
        editTask: editTask
        }, dispatch
    );
}

export default connect(null, matchDispatchToProps)(TaskForm);