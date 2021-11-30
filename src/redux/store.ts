import {combineReducers, createStore} from 'redux';
import {toDoListReducer} from './reducers';

const initialState = {
    toDoList: [{toDo: 'test', isDone: false}],
};

 const reducer =  combineReducers({
    toDoList: toDoListReducer
});

export default  createStore(reducer, initialState);
