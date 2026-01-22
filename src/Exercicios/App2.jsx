import { useState } from "react";

function App() {
  const [ texto, setTexto] = useState("");

  return (
    <div>
      <h1>{texto}</h1>
      <input 
        type="text" 
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}

export default App;