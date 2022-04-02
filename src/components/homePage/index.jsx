import NuKenzie from "../assets/NuKenzie.png"
import Section from "../assets/Section.png"
import { Button } from "../button"
import "./style.css"


export const ContentHomePage = ({ setIsLoggedIn }) => {

    function handleLogout() {
        setIsLoggedIn(true)
    }

    return (
        <>
            <div className="nuKenzieOne">
                <img src={NuKenzie} alt="NuKenzie" />
                <h2>Centralize o controle das suas finanças</h2>
                <span>de forma rápida e segura</span>
                <Button onClick={() => handleLogout()} className={"btnStart"}>Iniciar</Button>
            </div>

            <div className="nuKenzieTwo">
                <img src={Section} alt="PageHome" />
            </div>
        </>
    )
}