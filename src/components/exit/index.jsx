import "./style.css"
import { Button } from "../button"


export const Exit = ({ listTransactions, remove }) => {

    function infoExit() {
        const cadastroDespesas = []

        listTransactions.forEach((cadastro) => {
            if (cadastro.tipo === "Despesa") {
                cadastroDespesas.push(cadastro)
            }
        })

        const saida = cadastroDespesas.map((transition, index) => {

            const { descricao, valor, tipo } = transition

            return (
                <li key={index} className="exit">
                    <div className="salary">
                        <h3>{descricao}</h3>
                        <span>{tipo}</span>
                    </div>

                    <div className="priceAndDelete">
                        <span>R$ {valor}</span>
                        <Button className="btnDelete" onClick={() => remove(transition)} />
                    </div>
                </li>
            )
        })

        return saida
    }

    return (
        infoExit()
    )
}