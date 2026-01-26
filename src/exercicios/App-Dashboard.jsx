import { use, useState } from "react";
import './App.css'
import Semaforo from "./exercicios/App7-Semaforo";
import Contador from "./exercicios/App5-Contador";

function App() {
  const [ task, setTask ] = useState("");

  return (
    <div className="page">
      <div className="card">
        <button onClick={() => setTask("semaforo")}>Semaforo</button>
        <button onClick={() => setTask("contador")}>Contador</button>
        { task === "semaforo" && <Semaforo />}
        { task === "contador" && <Contador />}
      </div>
    </div>
  );
}

export default App;