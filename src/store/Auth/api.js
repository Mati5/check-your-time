import axios from 'axios';

export const signUp = (formData) => {
    return axios.post('/api/user/register', formData);
};

export const signIn = (formData) => {
    return axios.post('/api/user/signin', formData);
};

export const logout = () => {
    return axios.post('/api/user/logout');
};