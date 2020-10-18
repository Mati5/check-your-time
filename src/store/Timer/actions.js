import * as actionTypes from './actionTypes';
import * as api from './api';

export const getAllTimerSuccess = (timerList) => ({
    type: actionTypes.GET_ALL_TIMER_SUCCESS,
    payload: timerList
});

export const createTimerSuccess = (timer) => ({
    type: actionTypes.CREATE_TIMER_SUCCESS,
    payload: timer
});

export const updateTimerSuccess = (updatedTimer) => ({
    type: actionTypes.UPDATE_TIMER_SUCCESS,
    payload: updatedTimer
});

export const setSelectedTimer = (selectedTimer) => ({
    type: actionTypes.SET_SELECTED_TIMER,
    payload: selectedTimer
});

export const clearTimer = () => ({
    type: actionTypes.CLEAR_TIMER
});

export const updateTimerTotalDurationAction = (data) => ({
    type: actionTypes.UPDATE_TIMER_TOTAL_DURATION,
    payload: data
})

export const createDaySessionSuccess = (daySession) => ({
    type: actionTypes.CREATE_DAY_SESSION_SUCCESS,
    payload: daySession
});

export const updateDaySessionSuccess = (timer) => ({
    type: actionTypes.UPDATE_DAY_SESSION_SUCCESS,
    payload: timer
});

export const deleteTimerSuccess = (id) => ({
    type: actionTypes.DELETE_TIMER_SUCCESS,
    payload: id
});



export const getAllTimer = () => async (dispatch) => {
    try {
        const response = await api.getAllTimer();
        const data = response.data;
        if(data.status === "success") {
            const timerList = data.result;
            dispatch(getAllTimerSuccess(timerList));
        }
    } catch(error) {
        console.log(error);
    }
};

export const createTimer = (timer) => async (dispatch) => {
    try {
        const response = await api.createTimer(timer);
        const data = response.data;
        if(data.status === "success") {
            const result = data.result;
            dispatch(createTimerSuccess(result));
        }
    } catch(error) {
        console.log(timer);
    }
};

export const deleteTimer = (timerId) => async (dispatch) => {
    try {
        const response = await api.deleteTimer(timerId);
        const data = response.data;
        if(data.status === "success") {
            dispatch(deleteTimerSuccess(timerId));
        }
    } catch(error) {
        console.log(error);
    }
};

export const updateTimer = (updatedTimer) => async (dispatch) => {
    try {
        const response = await api.updateTimer(updatedTimer);
        const data = response.data;
        if(data.status === "success") {
            const result = data.result;
            dispatch(updateTimerSuccess(result));
        }
    } catch (error) {
        console.log(error);
    }
};

export const prepareDataToUpdateTotalDuration = (result) => {
    const timerId = result.daySession.TimerId;
    const totalDuration = result.totalDuration;

    const data = {
        timerId: timerId,
        totalDuration: totalDuration
    }

    return data;
}

export const createDaySession = (daySession) => async (dispatch) => {
    try {
        const response = await api.createDaySession(daySession);
        const data = response.data;
        if(data.status === "success") {
            const result = data.result;
            const updateTotalDurationPayload = prepareDataToUpdateTotalDuration(result);

            dispatch(createDaySessionSuccess(result.daySession));
            dispatch(updateTimerTotalDurationAction(updateTotalDurationPayload));
        }
    } catch(error) {
        console.log(error);
    }
};

export const updateDaySession = (timer) => async (dispatch) => {
    try {
        const response = await api.updateDaySession(timer);
        const data = response.data;
        if(data.status === "success") {
            const result = data.result;
            const updateTotalDurationPayload = prepareDataToUpdateTotalDuration(result);

            dispatch(updateDaySessionSuccess(result.daySession));
            dispatch(updateTimerTotalDurationAction(updateTotalDurationPayload));
        }
    } catch(error) {
        console.log(error);
    }
};