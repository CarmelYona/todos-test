import { useState } from "react"
import { useEffect } from "react"
import { List } from "../cmps/list"
import { Modal } from "../cmps/modal"
import { UserTodos } from "../cmps/user-todos"
import { TodosService } from "../services/todos.service"
import { userService } from "../services/user.service"


export const TodoPage = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        setUsers(await userService.getUsers())
    }

    const loadTodos = async (userId) => {
        setTodos(await TodosService.getTodos(userId))
    }

    const updateUser = async (userToUpdate) => {
        console.log(userToUpdate)
        await userService.updateUser(userToUpdate)
        loadUsers()
    }

    if (!users?.length) return <div>Loading..</div>
    return <section className="todo-page">
        <div className="page-body flex">
            <List loadFunc={loadTodos} items={users} setItem={setUser} type='users' />
            {todos ? <UserTodos todos={todos} setTodos={setTodos} /> : <div><h1>Todos List:</h1></div>}
        </div>

        {user && <Modal item={user} setItem={setUser} type='user' updateFunc={updateUser} />}
    </section>
}