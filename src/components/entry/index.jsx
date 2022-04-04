import "./style.css"
import { Button } from "../button"

export const Entry = ({ listTransactions, remove }) => {

    function infoEntry() {
        const cadastroEntradas = []

        listTransactions.forEach((cadastro) => {
            if (cadastro.tipo === "Entrada") {
                cadastroEntradas.push(cadastro)
            }
        })

        const entrada = cadastroEntradas.map((transition, index) => {

            const { descricao, valor, tipo } = transition

            return (
                <li key={index} className="entry">
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

        return entrada
    }

    return (
        infoEntry()
    )
}