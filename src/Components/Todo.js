import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handletoggleTodo() {
    toggleTodo(todo.id);
  }
  return (
    <label>
      <input type="checkbox" checked={todo.completed} onChange={handletoggleTodo} />
      {todo.name}
    </label>
  )
}
