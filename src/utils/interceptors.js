import axios from 'axios';
import history from './history';
import store from '../store/index';
import { logoutAction } from '../store/Auth/actions';

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        history.push('/signin');
        localStorage.clear();
        store.dispatch(logoutAction());    
    }    
    return error.response;
});