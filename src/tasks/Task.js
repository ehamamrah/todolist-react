import React from 'react';

export default function Task( { task, toggleTask } ) {
  function handleTaskClick(){
    toggleTask(task.id);
  }
  function strikeCompleted(task){
    if (task.complete){
      return <s>{task.name}</s>;
    } else {
      return task.name;
    }
  }
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">
          <span className="pr-2"><input type='checkbox' checked={task.complete} onChange={handleTaskClick}/></span>
          {strikeCompleted(task)}
        </h5>
      </div>
    </div>
  )
}
