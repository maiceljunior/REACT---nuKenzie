import "./style.css"

export const Price = ({ listTransactions }) => {

    function priceSome() {

        const valorCadastros = []

        listTransactions.forEach((cadastros) => {
            if (cadastros.valor) {
                valorCadastros.push(parseInt(cadastros.valor))
            }
        })

        const precoTotal = valorCadastros.reduce((acc, valor) => {
            acc += valor
            return acc
        }, 0)

        return precoTotal.toFixed(2)
    }


    return (
        <div className="containerPrice">
            <div className="priceAll">
                <h2>Valor total:</h2>
                <span>O valor se refere ao saldo</span>
            </div>

            <span className="price">${priceSome()}</span>

        </div>
    )
}