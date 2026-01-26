import { use, useState } from "react";
import './App.css'

const archive = import.meta.glob("./exercicios/*.jsx", { eager: true });

function App() {
  const [ task, setTask ] = useState("");

  return (
    <div className="page">
      <div className="card">
        <div>
          <button>Voltar</button>
        </div>
        {/* {Object.keys(myTasks).map((item) => (
          <button 
            key={item}
            onClick={() => setTask(item)}
          >{item}</button>
        ))}
        <div className="content">
          { myTasks[task] }
        </div> */}
      </div>
    </div>
  );
}

export default App;