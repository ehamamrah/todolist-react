import React, { useState, useRef, useEffect } from 'react';
import TodoList from './ToDoList';
import uuidv4 from 'uuid/v4';

const LOCAL_STORAGE_KEY = 'tasks';

function App() {
  const [todos, setTasks] = useState([]);
  const taskNameRef = useRef();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTask(id){
    const newTasks = [...todos];
    const task = newTasks.find(task => task.id === id);
    task.complete = !task.complete;
    setTasks(newTasks);
  }

  function handleAddTask(event){
    const name = taskNameRef.current.value;
    if (name === '' ) return;
    setTasks(previousTasks => {
      return [...previousTasks,
        {id: uuidv4(),
         name: name,
         complete:false}
      ];
    });
    taskNameRef.current.value = null; // Make the field empty after getting the task
  }

  return (
    <>
      <TodoList todos={todos} toggleTask={toggleTask} />
      <input type="text" ref={taskNameRef} />
      <button className="btn btn-success" onClick={handleAddTask}>
        Add Task
      </button>
      <button className="btn btn-danger">
        Clear Completed Tasks
      </button>
      <div>
        Pending Tasks <span className="badge badge-primary">{todos.length}</span>
      </div>
    </>
  )
}

export default App;
