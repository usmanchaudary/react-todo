import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import TodoList from './Components/TodoList';
import Router from './Routing/Router';

const App = () => {
	const [todos, setTodos] = useState([
		{ id: 1, value: 'Do Stuff' },
		{ id: 2, value: 'Do Stuff 2' },
	]);

	const addTodo = text => {
		if (!text) return;
		let lastTodo = todos[todos.length - 1];
		const newTodo = [...todos, { value: text, id: lastTodo.id + 1 }];
		setTodos(newTodo);
	};

	return (
		<div className='App'>
			<NavBar />
			<SearchBar addTodo={addTodo} />
			<TodoList todos={todos} />
			<Router />
		</div>
	);
};

export default App;
