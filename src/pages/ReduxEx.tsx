import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toDoListConstants } from '../redux/constants';
import asyncStore from '../redux/thunk';

interface obj {
    [key: string]: any
}
const ReduxComponent = () => {
    const [toDoListInput, setToDoList] = React.useState('');
    const dispatch = useDispatch();
    const { toDoList: { toDos } }: obj = useSelector(state => state);

    useEffect(() => {
        dispatch(asyncStore.getState());
    }, [dispatch]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(asyncStore?.ADD_TODO(toDoListInput));
    }

    return (
        <div className="App">
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" value={toDoListInput} onChange={(e) => setToDoList(e.target.value)} />
                    <button type='submit'>Add</button>
                </div>
            </form>
            <ul>
                {[...toDos]?.reverse().map((item: any, index: number) => (
                    <li key={index}
                        className='input-container'
                    >
                        <p
                            onClick={() => dispatch({ type: toDoListConstants.TOGGLE_TODO, payload: index })}
                            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                        > {item.title} </p>
                        <button onClick={() => dispatch({ type: toDoListConstants.DELETE_TODO, payload: item.id })}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ReduxComponent;
