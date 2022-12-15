import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()

    return <section className="home-page flex column">
        <h1>Welcome !</h1>
        <div className="navigate flex column">

            <button onClick={() => navigate('/todos')}>Todos List</button>
            <button onClick={() => navigate('/blog')}> Blog</button>
        </div>
    </section >
}