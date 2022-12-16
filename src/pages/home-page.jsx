import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import lottie from 'lottie-web'
import { Button } from 'react-bootstrap';

export const HomePage = () => {
    const navigate = useNavigate()
    const container = useRef(null)

    useEffect(() => {

        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/animations/drinking.json'),
        })

    }, [])

    return <section className="home-page flex">
        <div className="home-page-wrapper flex column">
            <h1>Welcome !</h1>
            <div className="navigate flex column">
                <div className="container flex" ref={container}></div>
                <div className="actions-wrapper flex column">
                    <Button onClick={() => navigate('/todos')} variant="primary" size="lg" active>
                        Todos List
                    </Button>{' '}
                    <Button onClick={() => navigate('/blog')} variant="secondary" size="lg" active>
                        Blog
                    </Button>
                </div>
            </div>
        </div>
    </section >
}


