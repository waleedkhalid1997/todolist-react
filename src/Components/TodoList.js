import React from 'react'
import Todo from './Todo';

export default function TodoList({todoList, toggleTodo}) {
  return (
    todoList.map((todo) => {
      return (
        <>
          <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} /><br/>
        </>
      )
    })
  )
}
