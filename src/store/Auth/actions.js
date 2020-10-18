
import history from '../../utils/history';
import * as actionTypes from './actionTypes';
import * as api from './api';
import { setToken } from '../../utils/auth';

export const loginSuccess = (user) => ({
    type: actionTypes.AUTH_SUCCESS,
    payload: user
});

export const loginError = (message) => ({
    type: actionTypes.AUTH_ERROR,
    payload: message
});

export const logoutAction = () => ({
    type: actionTypes.LOGOUT
})

export const register = async (formData) => {
    try {
        const response = await api.signUp(formData);
        const data = response.data;
        if(data.status === "success") {
            history.push('/signin');
        }
    } catch(error) {
        console.log(error);
    }
}

export const login = formData => async (dispatch) => {
    try {
        const response = await api.signIn(formData);
        const data = response.data;
        
        if(data.status === "success") {
            const user = data.result;
            dispatch(loginSuccess(user));
            setToken(user.token);
            history.push('/dashboard');
        } else if(data.status === "error") {
            const errorMessage = data.error;
            dispatch(loginError(errorMessage));
        }
    } catch(error) {
        console.log(error);
    }   
}

export const logout = () => async (dispatch) => {
    try {
        const response = await api.logout();
        dispatch(logoutAction());
        localStorage.clear();
        history.push('/signin');
        // history.go(0);
    } catch(error) {
        console.log(error);
    }
}

