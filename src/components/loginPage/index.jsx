import { Header } from "../header";
import { Button } from "../button"
import { Form } from "../form";
import { Price } from "../price/price";
import { Entry } from "../entry";
import NuKenzieBlack from "../assets/NuKenzieBlack.png"
import "./style.css"
import { Exit } from "../exit";

export const LoginPage = ({ setIsLoggedIn, listTransactions, setListTransactions, remove, filterEntradas, filterSaidas }) => {

    function handleLogout() {
        setIsLoggedIn(false)
    }


    return (

        <>
            <Header>
                <img src={NuKenzieBlack} alt="Logo" />
                <Button onClick={() => handleLogout()} className={"btnInicio"}>Inicio</Button>
            </Header>

            <div className="formAndList">
                <div className="formAndPrice">
                    <div><Form setListTransactions={setListTransactions} listTransactions={listTransactions} /></div>
                    <div><Price listTransactions={listTransactions} /></div>
                </div>

                <div className="list">
                    <Header className="headerList">
                        <h2 className="resume">Resumo financeiro</h2>

                        <div className="buttonsList">
                            <Button className={"all"}>Todos</Button>
                            <Button className={"Entry"} onClick={filterEntradas}>Entradas</Button>
                            <Button className={"Leave"} onClick={filterSaidas}>Despesas</Button>
                        </div>
                    </Header>

                    <ul className="ulList">
                        <Entry listTransactions={listTransactions} remove={remove} />
                        <Exit listTransactions={listTransactions} remove={remove} />
                    </ul>

                </div>

            </div>

        </>

    )
}