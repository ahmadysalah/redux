import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toDoListConstants } from './redux/constants';

interface obj {
  [key: string]: any
}
function App() {
  const [toDoList, setToDoList] = React.useState('');
  const dispatch = useDispatch();
  const list: obj = useSelector(state => state);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="input-container">
        <input type="text" value={toDoList} onChange={(e) => setToDoList(e.target.value)} />
        <button onClick={() => dispatch({ type: toDoListConstants.ADD_TODO, payload: toDoList })}>Add</button>
      </div>
      <ul>
        {list?.toDoList?.map((item: any, index: number) => (
          <li key={index}
            className='input-container'
          >
            <p
              onClick={() => dispatch({ type: toDoListConstants.TOGGLE_TODO, payload: index })}
              style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
            > {item.toDo} </p>
            <button onClick={() => dispatch({ type: toDoListConstants.DELETE_TODO, payload: list?.toDoList?.[index] })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
