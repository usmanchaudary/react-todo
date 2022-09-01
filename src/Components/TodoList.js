const TodoList = ({ todos }) => {
	return (
		<>
			<div>
				<ol>
					{todos.map(todo => {
						return <li key={todo.id}>{todo.value}</li>;
					})}
				</ol>
			</div>
		</>
	);
};
export default TodoList;
