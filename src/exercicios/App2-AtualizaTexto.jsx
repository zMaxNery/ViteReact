import { useState } from "react";

function App() {
  const [ texto, setTexto] = useState("");

  return (
    <div className="area-task">
      <h1>{texto}</h1>
      <input 
        type="text" 
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}

export default App;