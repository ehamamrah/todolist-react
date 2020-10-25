import React from 'react';
import Task from './Task';

export default function TodoList({ todos }) {
  return (
    todos.map(todo => {
      return <Task task={todo} />
    })
  )
}
