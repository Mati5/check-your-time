const TOKEN_KEY = 'auth-token'

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}