import { AiOutlineClose } from 'react-icons/ai'

export const UserTodos = (props) => {
    const { todos, setTodos } = props
    return <div className="user-todos flex column">
        <div className="todos-header flex">
            <h1>Todos List:</h1>
            {todos && <button onClick={() => setTodos(null)} className="btn"><AiOutlineClose /></button>}
        </div>
        <div className="todos-list flex column">
            {todos?.map(todo => {
                return <div className="todo flex column" key={todo.id}>
                    <h3>{todo.title}</h3>
                    <h5>{todo.completed ? 'Completed' : 'Not Completed'}</h5>
                </div>
            })}
        </div>
    </div>
}