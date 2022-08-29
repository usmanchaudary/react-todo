
const TodoList = ({ todos }) => {
    return (
        <>
            <div>
                <ol>
                    {todos.map(todo => {
                        return (
                            <li>{todo.value}</li>
                        )
                    })}
                </ol>
            </div>
        </>
    )
}
export default TodoList;