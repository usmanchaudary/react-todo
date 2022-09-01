import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar';
import TodoList from './Components/TodoList';
import Router from './Routing/Router';
import Hello from './Components/Hello';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [todos, setTodos] = useState([{ id: 1, value: 'Do Stuff' }, { id: 2, value: 'Do Stuff 2' }]);

  const addTodo = text => {
    if(!text) return;
    let lastTodo = todos[todos.length -1];
    const newTodo = [...todos, { value: text,id: lastTodo.id + 1 }];
    setTodos(newTodo);
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      {/* passing function as a parameter */}
      <SearchBar addTodo={addTodo}></SearchBar>
      <TodoList todos={todos}></TodoList>
      <Router></Router>
    </div>
  );
}

export default App;
