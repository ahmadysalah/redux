import api from '../api';
import { toDoListConstants } from './constants';

const asyncStore = {
    getState: () =>async(dispatch:any) => {
        try {
            const {data} = await api.getAllToDos();
            dispatch({type: toDoListConstants?.GET_ALL_TODOS, payload: data});
        } catch (error) {
           dispatch({type: toDoListConstants?.GET_ALL_TODOS_FAILURE, payload: error});
        }  
    },
    ADD_TODO: (newToDo:any) => async(dispatch:any) => {
        try {
            // dispatch ({type: toDoListConstants?.ADD_TODO, payload: newToDo});
            const {data} = await api.addNewTodo(newToDo);
            console.log(data);
            dispatch({type: toDoListConstants?.ADD_TODO, payload: data});
        } catch (error) {
            dispatch({type: toDoListConstants?.CREATE_NEW_TODO_FAILURE, payload: error});
        }
    }
}


export default asyncStore;