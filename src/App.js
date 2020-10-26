import React, { useState, useRef, useEffect } from 'react';
import TodoList from './tasks/ToDoList';
import uuidv4 from 'uuid/v4';
import {
  BsFillTrashFill, BsFileEarmarkPlus,
  BsFillInfoCircleFill, BsLayersFill
} from 'react-icons/bs';

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

  function handleEnterTask(e){
    // It triggers pressing the enter key
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }

  function handleClearCompleted(){
    const newTasks = todos.filter(task => !task.complete);
    setTasks(newTasks);
  }

  return (
    <>
      <div className='container' >
        <div className='row'>
          <div className='col-md-6 offset-md-3 pt-5'>
            <h2>
              <BsLayersFill /> Holla,
              <small className="text-muted"> Enjoy adding tasks</small>
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3 pt-5'>
            <TodoList todos={todos} toggleTask={toggleTask} />
            <div className='mt-5'>
              <hr className="mb-2"/>
            </div>
            <div className="input-group mb-2">
              <input type="text" ref={taskNameRef} onKeyPress={handleEnterTask} placeholder="Write a task .. Use 'Enter' key or click 'Create Task'" className="form-control" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className='float-left'>
              <button className="btn btn-outline-success btn-sm" onClick={handleAddTask}>
                <BsFileEarmarkPlus /> Create Task
              </button>
            </div>
            <div className='float-right'>
              <button className="btn btn-outline-danger btn-sm" onClick={handleClearCompleted}>
                <BsFillTrashFill /> Clear Completed
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3 pt-5'>
            <div className="alert alert-info" role="alert">
              <BsFillInfoCircleFill />
              <span className='pl-2'>Pending Tasks</span>
              <span className="badge badge-pill badge-light ml-2">
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
