import { use, useState } from "react";
import './App.css'

const archive = import.meta.glob("./exercicios/*.jsx", { eager: true });

function App() {
  const [ task, setTask ] = useState("");

  const myTasks = {};

  Object.keys(archive).forEach((obj) => {
    const objDef = archive[obj].default;

    const cleanName = obj.replace("./exercicios/", "");

    myTasks[cleanName] = objDef;

  });
  return (
    <div className="page">
      <div className="card">
        <div>
          <button onClick={() => setTask("")}>Voltar</button>
        </div>
        {Object.keys(myTasks).map((item) => (
          <button 
            key={item}
            onClick={() => setTask(item)}
          >{item}</button>
        ))}
        <div className="content">
          {task && <>{myTasks[task]}</>}
        </div>
      </div>
    </div>
  );
}

export default App;