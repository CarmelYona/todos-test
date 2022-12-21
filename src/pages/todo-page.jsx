import { useRef, useState } from "react"
import { useEffect } from "react"
import { List } from "../cmps/list"
import { Modal } from "../cmps/modal"
import { UserTodos } from "../cmps/user-todos"
import { TodosService } from "../services/todos.service"
import { userService } from "../services/user.service"
import { Button } from 'react-bootstrap';
import lottie from 'lottie-web'
import { Header } from "../cmps/header"
import { NavBar } from "../cmps/nav-bar"


export const TodoPage = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [todos, setTodos] = useState(null)
    const container = useRef(null)

    useEffect(() => {
        loadUsers()

        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/animations/loading.json'),
        })
    }, [])

    const loadUsers = async () => {
        setTimeout(async () => {
            setUsers(await userService.getUsers())

        }, 1000)
    }

    const loadTodos = async (userId) => {
        setTodos(await TodosService.getTodos(userId))
    }

    const updateUser = async (userToUpdate) => {
        console.log(userToUpdate)
        await userService.updateUser(userToUpdate)
        loadUsers()
    }

    if (!users?.length) return <div className="loading-animation flex" ref={container}></div>
    return (<section className="todo-page flex">
        <div className="page-body flex column">
            <Header />
            <div className="page-body-container flex">
                <NavBar />
                <List loadFunc={loadTodos} items={users} setItem={setUser} type='users' />
                {todos ? <UserTodos todos={todos} setTodos={setTodos} /> : <div><h1>Todos List:</h1></div>}
            </div>
        </div>

        {user && <Modal item={user} setItem={setUser} type='user' updateFunc={updateUser} />}
    </section>)
}