import axios from 'axios';

export const getAllTimer = () => {
    return axios.get('/api/timer/getAllTimer');
};

export const createTimer = (timer) => {
    return axios.post('/api/timer/createTimer', timer);
};

export const updateTimer = (updatedTimer) => {
    return axios.put(`/api/timer/updateTimer`, updatedTimer);
};

export const deleteTimer = (timerId) => {
    return axios.delete(`/api/timer/deleteTimer/${timerId}`);
};

export const createDaySession = (daySession) => {
    return axios.post(`/api/timer/createDaySession`, daySession);
};

export const updateDaySession = (daySession) => {
    return axios.put(`/api/timer/updateDaySession`, daySession);
}