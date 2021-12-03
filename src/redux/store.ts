import {combineReducers, createStore,applyMiddleware} from 'redux';
import {toDoListReducer} from './reducers';
import thunk from 'redux-thunk'

// const initialState = {
//     toDoList: [{toDo: 'test', isDone: false}],
// };

 const reducer =  combineReducers({
    toDoList: toDoListReducer
});

export default  createStore(reducer, applyMiddleware(thunk));
