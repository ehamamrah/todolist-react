import React from 'react';
import { BsCheckBox } from 'react-icons/bs';

export default function Task( { task, toggleTask } ) {
  function handleTaskClick(){
    toggleTask(task.id);
  }
  function strikeCompleted(task){
    if (task.complete){
      return <s className='text-muted pl-2'>{task.name}</s>;
    } else {
      return <span className='pl-2'>{task.name}</span>;
    }
  }
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title mb-0">
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-outline-success btn-xs">
              <input type='checkbox' checked={task.complete} onChange={handleTaskClick} className='p-5'/>
              <BsCheckBox/>
            </label>
            {strikeCompleted(task)}
          </div>
        </h5>
      </div>
    </div>
  )
}
