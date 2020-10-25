import React, { useState } from 'react';
import TodoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoList />
      <input type="text" />
      <button class="btn btn-success">
        Add Task
      </button>
      <button class="btn btn-danger">
        Clear Completed Tasks
      </button>
      <div>
        Pending Tasks <span class="badge badge-primary">0</span>
      </div>
    </>
  )
}

export default App;
