import { use, useState } from "react";
import './App.css'

function App() {
  const [ user, setUser ] = useState({ name: "Visitante", status: "Offline" });

  const [ btnLog, setBtnLog ] = useState(false);

  const isBtnLog = () => { 
    setBtnLog(!btnLog);
    if (btnLog === true) setUser("Guilherme", "Online");
  };  

  return (
    <div className="page">
      <div className="card">
        <h2>Usuário: {user.name}</h2>
        <h2>Status: {user.status}</h2>
        { !btnLog && <button 
          onClick={isBtnLog}
          style={{
            width: "60px",
            height: "20px"
          }}
        >Entrar</button> }
        { btnLog && <button 
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