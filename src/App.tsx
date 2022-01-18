import React, { useState } from 'react';
import Todolist from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from './todo.model';

const App: React.FC = () =>{
  const [todos,setTodo]= useState<Todo[]>([])
  const handleTodo = (text:string)=> {
    setTodo(prevTodo => [
      ...prevTodo,
      {id: Math.random().toString(), text: text}]);
  }
  const handleDeleteTodo = (TodoId: string) => {
    setTodo(prevTodo => {
      return prevTodo.filter(todo=> todo.id!== TodoId);
    })
  }
  return (
    <div className="App">
    <NewTodo onTodo={handleTodo}/>
    <Todolist items={todos} onDelete={handleDeleteTodo}/>
    </div>
  );
}

export default App;
