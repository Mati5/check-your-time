import * as actionTypes from './actionTypes';

const initialState = {
    token: null,
    auth: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                auth: true
            }
        case actionTypes.AUTH_ERROR:
            return {
                ...state,
                auth: false,
                error: action.payload
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                auth: false
            }
        default:
            return state;
    }
}

export default authReducer;