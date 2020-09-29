import { combineReducers } from 'redux';
import timerReducer from './Timer/reducer';
import authReducer from './Auth/reducer';

const rootReducer = combineReducers({
    timerReducer: timerReducer,
    user: authReducer
});

export default rootReducer;