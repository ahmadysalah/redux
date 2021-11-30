import { toDoListConstants } from './constants';

export const toDoListReducer = (state = [{ toDo: 'test', isDone: false }], action: any) => {
    switch (action.type) {
        case toDoListConstants.ADD_TODO:
            return [...state, { toDo: action.payload, isDone: false }];
        case toDoListConstants.DELETE_TODO:
            return state.filter(todo => todo !== action.payload);
        case toDoListConstants.TOGGLE_TODO:
            const newState = [...state]
            newState[action.payload].isDone = !newState[action.payload].isDone;
            console.log(newState);
            return newState;
        default:
            return state;
    }
};
