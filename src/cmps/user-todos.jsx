

export const UserTodos = (props) => {
    const { todos, setTodos } = props
    return <div className="user-todos flex column">
        <h1>Todos List:</h1>
        <button onClick={() => setTodos(null)} className="btn-cloase">Close</button>
        {todos.map(todo => {
            return <div className="todo flex column" key={todo.id}>
                <h3>{todo.title}</h3>
                <h5>{todo.completed ? 'Completed' : 'Not Completed'}</h5>
            </div>
        })}
    </div>
}