import { useState } from "react";

function App() {
  const [ nome, setNome] = useState("Clique aqui!!");

  const mudarNome = () => {
    setNome("Novo Nome!!!");
  };

  return (
    <div>
      <h1>{nome}</h1>
      <button onClick={mudarNome}>Mudar texto</button>
    </div>
  );
}

export default App;