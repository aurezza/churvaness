export function getTask(tasks) {
    return {
        type: 'GET_TASK',
        payload: tasks
    }
}

export function addTask(task) {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        id
    }
}

export function editTask(data) {
    return {
        type: 'EDIT_TASK',
        payload: data,
        id: data.id
    }
}