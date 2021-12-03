import { toDoListConstants } from './constants';

export const toDoListReducer = (state = {toDos:[{ id:'',toDo: '',completed:false}], error: '' }, action: any) => {
    switch (action.type) {


        case toDoListConstants.GET_ALL_TODOS:
            return {...state, toDos: action.payload};


        case toDoListConstants.ADD_TODO:
             return {...state, toDos:[...state?.toDos, action.payload]};


        case toDoListConstants.DELETE_TODO:
            return {...state, toDos: state.toDos.filter(({id}) => id !== action.payload)};


        case toDoListConstants.TOGGLE_TODO:
            const toDos = [...state.toDos].reverse();
            toDos[action.payload].completed = !toDos[action.payload].completed;
             return {...state,toDos:toDos.reverse()};
        default:
            return state;
    }
};
