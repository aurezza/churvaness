import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const Reducers = combineReducers({
    tasks: taskReducer
});

export default Reducers;