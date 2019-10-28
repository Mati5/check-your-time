import * as actionTypes from './actionTypes';

const initialState = {
    taskList: []
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TASKS:
            return {
                ...state
            }
        case actionTypes.ADD_TASK:
            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }
        case actionTypes.UPDATE_TASK:
            const index = state.taskList.findIndex(el => el.id === action.payload.id);
            const updatedTaskList = state.taskList;
            updatedTaskList[index] = action.payload
            return {
                ...state,
                taskList: updatedTaskList
            }
        case actionTypes.DELETE_TASK:
            let filteredTaskList = [...state.taskList];
            filteredTaskList = filteredTaskList.filter((el) => { return el.id !== action.payload });

            return {
                ...state,
                taskList: filteredTaskList
            }
        default:
            return state;
    }
}

export default taskReducer;