import { Button } from "../button"
import { useState } from "react"
import rs from "../assets/rs.png"
import "./style.css"

export const Form = ({ listTransactions, setListTransactions }) => {

    const [infoInput, setInfoInput] = useState("")
    const [infoValue, setInfoValue] = useState("")
    const [infoSelect, setInfoSelect] = useState("Entrada")

    function addTodo(input, select, value) {
        const infos = { descricao: input, valor: value, tipo: select }

        if (infos.tipo === "Despesa" && infoValue < 0) {
            setListTransactions([...listTransactions, infos]);

        } else if (infos.tipo === "Entrada" && infoValue > 0) {
            setListTransactions([...listTransactions, infos]);
        } else {
            alert("Na entrada apenas numeros positivos e na saida apenas numeros negativos!")
        }

    }


    return (
        <form onSubmit={(event) => { event.preventDefault() }}>

            <div className="valueOne">
                <label>Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" onChange={(event) => setInfoInput(event.target.value)} value={infoInput} />
                <span>Ex: Compra de roupas</span>
            </div>

            <div className="valueAndType">
                <div className="valueTwo">
                    <label htmlFor="value">Valor</label>
                    <input type="number" name="value" onChange={(event) => setInfoValue(event.target.value)} value={infoValue} />
                    <img src={rs} alt="cifrão" />
                </div>

                <div className="valueTree">
                    <label htmlFor="typeValue">Tipo de valor</label>

                    <select name="typeValue" onChange={(event) => setInfoSelect(event.target.value)} value={infoSelect} >
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>

            <Button type="submit" onClick={() => addTodo(infoInput, infoSelect, infoValue, setInfoInput(""), setInfoValue(""), setInfoSelect("Entrada"))} className="btnRegister">Inserir valor</Button>
        </form>

    )
}