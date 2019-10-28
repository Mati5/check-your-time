import { combineReducers } from 'redux';
import taskReducer from './Tasks/reducer';

const rootReducer = combineReducers({
    tasks: taskReducer
});

export default rootReducer;