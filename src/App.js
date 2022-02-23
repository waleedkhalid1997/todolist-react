import React, {useState, useEffect, useRef} from 'react';
import TodoList from './Components/TodoList';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todoList, setTodoList] = useState([]);
  const todoName = useRef();
  function handleAddTodo(e) {
    const name = todoName.current.value;
    if (name === '') return
    setTodoList(prev => {
      return [...prev,{ 'id' : uuidv4(), 'name' : name, 'completed': false }]
    });
    todoName.current.value = null;
  }
  function toggleTodo(id) {
    const todos = [...todoList];
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodoList(todos);
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todo'));
    console.log(todos);
    if (todos) setTodoList(todos);
  }, []);
  useEffect(()=> {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);
  function handleClearComplete() {
    const todos = [...todoList];
    setTodoList(todos.filter(todo => !todo.completed));
  }
  return (
    <>
      <TodoList todoList={todoList} toggleTodo={toggleTodo} />
      <br/>
      <input type="text" ref={todoName} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearComplete}>Clear Complete</button>
      <br/>
      {todoList.filter(todo => !todo.completed).length} Incompleted.
    </>
  );
}

export default App;
