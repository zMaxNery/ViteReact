import { use, useState } from "react";
import '/src/App.css'

function App() {
  const [ user, setUser ] = useState({ name: "Visitante", status: "Offline" });

  const isBtnLog = () => { 
    if (user.name === "Visitante") {
      setUser({ name: "Guilherme", status: "Online" });
    } else {
      setUser({ name: "Visitante", status: "Ofline" });
    }
  };  

  return (
    <div className="page">
      <div className="card">
        <h2>Usuário: {user.name}</h2>
        <h2>Status: {user.status}</h2>
        { user.name === "Visitante" ? <button 
          onClick={isBtnLog}
          style={{
            width: "60px",
            height: "20px"
          }}
        >Entrar</button> : <button 
          onClick={isBtnLog}
          style={{
            width: "60px",
            height: "20px"
          }}
        >Sair</button> }
      </div>
    </div>
  );
}

export default App;