import React, { useState } from 'react';
import TodoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button class="btn btn-success">
        Add Task
      </button>
      <button class="btn btn-danger">
        Clear Completed Tasks
      </button>
      <div>
        Pending Tasks <span class="badge badge-primary">{todos.length}</span>
      </div>
    </>
  )
}

export default App;
