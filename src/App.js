import "./App.css";
import { ContentHomePage } from "./components/homePage/index.jsx";
import { useState } from "react";
import { LoginPage } from "./components/loginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  function remove(removed) {
    const filterRemove = listTransactions.filter((transactions) => {
      return transactions !== removed;
    });

    setListTransactions([...filterRemove]);
  }

  function filterEntradas() {
    const entry = listTransactions.filter((transactions) => {
      return transactions.tipo === "Entrada";
    });
  }

  function filterSaidas() {
    const leaves = listTransactions.filter((transactions) => {
      return transactions.tipo === "Despesa";
    });
  }

  return (
    <main className="App App-header">
      {isLoggedIn ? (
        <div className="logged">
          <LoginPage
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
            setIsLoggedIn={setIsLoggedIn}
            remove={remove}
            filterEntradas={filterEntradas}
            filterSaidas={filterSaidas}
          />
        </div>
      ) : (
        <div className="content">
          <ContentHomePage setIsLoggedIn={setIsLoggedIn} remove={remove} />
        </div>
      )}
    </main>
  );
}

export default App;
