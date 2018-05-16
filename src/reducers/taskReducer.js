const tasks = (state = {
    tasks: [
        {
            id: 1,
            name: "Task 1",
            description: 'Tetetet at ang ma-kyonget ugmas nang bigalou pamenthol jutay Cholo ano daki tamalis conalei at nang antibiotic lorem ipsum keme keme nakakalurky',
            priority: 'HIGH',
            author: 'Beki 1',
            assignees: 'Jongalers',
            startDate: '2018-05-15',
            dueDate: '2018-05-15',
            status: 'pending'
        },
        {
            id: 2,
            name: "Task 2",
            description: 'Tetetet at ang ma-kyonget ugmas nang bigalou pamenthol jutay Cholo ano daki tamalis conalei at nang antibiotic lorem ipsum keme keme nakakalurky',
            priority: 'LOW',
            author: 'Beki 2',
            assignees: 'Pepitas',
            startDate: '2018-05-15',
            dueDate: '2018-05-15',
            status: 'pending'
        }
    ],
    newTasks: {}
}, action = {}) => {

    let newState = {...state};

    const taskFactory = {
        GET_TASK: getTask,
        ADD_TASK: addTask,
        DELETE_TASK: deleteTask,
        EDIT_TASK: editTask,
        returnState: returnState
    };

    function getTask() {
        console.log('displaying tasks');
        return newState;
    }

    function addTask() {
        console.log('new task added');
        newState.tasks.push(action.payload);
        return newState;
    }

    function deleteTask() {
        let indexForDeletion = newState.tasks.map(item => {
            return item.id;
        }).indexOf(action.id);

        newState.tasks.splice(indexForDeletion, 1);
        console.log(action.id, ' has been deleted');
        return newState;
    }

    function editTask() {
        let indexForEditing = newState.tasks.findIndex((foundTask) => foundTask.id === action.id);

        newState.tasks[indexForEditing] = action.payload;

        console.log('the updated task: ', newState.tasks[indexForEditing]);

        return newState;
    }

    function returnState() {
        return state;
    }

    return (taskFactory[action.type] || taskFactory.returnState)(state, action);
}

export default tasks;