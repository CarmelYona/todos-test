import { useNavigate } from "react-router-dom"
import { SiTestin } from "react-icons/si"
import { TiHomeOutline } from "react-icons/ti"


export const Header = () => {
    const navigate = useNavigate()

    return <header>

        <div className="header-wrapper flex">
            <div className="logo flex">
                <SiTestin />
            </div>
            <div className="home-btn flex">
                <TiHomeOutline onClick={() => navigate('/')} />
            </div>
        </div>
    </header>
}