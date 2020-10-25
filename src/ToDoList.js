import React from 'react';
import Task from './Task';

export default function TodoList({ todos, toggleTask }) {
  return (
    todos.map(todo => {
      return <Task key={todo.id} toggleTask={toggleTask} task={todo} />
    })
  )
}
