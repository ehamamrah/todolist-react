import React, { useState, useRef, useEffect } from 'react';
import TodoList from './tasks/ToDoList';
import uuidv4 from 'uuid/v4';
import { BsFillTrashFill, BsFileEarmarkPlus } from 'react-icons/bs';

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

  function handleClearCompleted(){
    const newTasks = todos.filter(task => !task.complete);
    setTasks(newTasks);
  }

  return (
    <>
      <div className='container' >
        <div className='row'>
          <div className='mx-auto pt-5'>
            <TodoList todos={todos} toggleTask={toggleTask} />
            <input type="text" ref={taskNameRef} />
            <button className="btn btn-success" onClick={handleAddTask}>
              <BsFileEarmarkPlus /> Create Task
            </button>
            <button className="btn btn-danger" onClick={handleClearCompleted}>
              <BsFillTrashFill /> Clear Completed
            </button>
            <div>
              Pending Tasks
              <span className="badge badge-primary">
                { todos.filter(task => !task.complete).length }
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
