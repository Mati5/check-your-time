import * as actionTypes from './actionTypes';

const initialState = {
    timerList: [],
    selectedTimer: null
}

const createDaySession = (timerList, daySession) => {
    const timerListUpdated = [...timerList];
    const index = timerListUpdated.findIndex(el => el.id === daySession.TimerId);
    timerListUpdated[index].DaySessions.push(daySession);
    
    return timerListUpdated;
};

const updateDaySession = (timerList, daySession) => {
    const timerListUpdated = [...timerList];
    const index = timerListUpdated.findIndex(el => el.id === daySession.TimerId);
    if(timerListUpdated[index]) {
        const indexDaySession = timerListUpdated[index].DaySessions.findIndex(el => el.id === daySession.id);
        timerListUpdated[index].DaySessions[indexDaySession] = daySession;
    }  

    return timerListUpdated;
};

const updateTimer = (timerList, updatedTimer) => {
    const timerListUpdated = [...timerList];
    const index = timerListUpdated.findIndex(el => el.id === updatedTimer.id);
    timerListUpdated[index] = updatedTimer;

    return timerListUpdated;
};

const updateTimerTotalDuration = (timerList, data) => {
    const timerListUpdated = [...timerList];
    const index = timerListUpdated.findIndex(el => el.id === data.timerId);
    timerListUpdated[index].totalDuration = data.totalDuration;

    return timerListUpdated;
}

const timerReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_ALL_TIMER_SUCCESS:
            return {
                ...state,
                timerList: action.payload
            }
        case actionTypes.CREATE_TIMER_SUCCESS:
            return {
                ...state,
                timerList: [...state.timerList, action.payload]
            }
        case actionTypes.UPDATE_TIMER_SUCCESS:
            return {
                ...state,
                timerList: updateTimer(state.timerList, action.payload)
            }
        case actionTypes.DELETE_TIMER_SUCCESS:
            let filteredtimerList = [...state.timerList];
            filteredtimerList = filteredtimerList.filter((el) => { return el.id !== action.payload });

            return {
                ...state,
                timerList: filteredtimerList
            }
        case actionTypes.SET_SELECTED_TIMER:
            return {
                ...state,
                selectedTimer: action.payload
            }
        case actionTypes.CLEAR_TIMER:
            return {
                ...initialState
            }
        case actionTypes.UPDATE_TIMER_TOTAL_DURATION:
            return {
                ...state,
                timerList: updateTimerTotalDuration(state.timerList, action.payload)
            }
        case actionTypes.UPDATE_DAY_SESSION_SUCCESS:
            return {
                ...state,
                timerList: updateDaySession(state.timerList, action.payload)
            }
        case actionTypes.CREATE_DAY_SESSION_SUCCESS:
            return {
                ...state,
                timerList: createDaySession(state.timerList, action.payload)
            }
       
        default:
            return state;
    }
}

export default timerReducer;