import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className=''>
      <h1>Todo List</h1>
      <div style={{display: 'flex'}}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
        />
        <button style={{marginLeft: '10px'}} onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;