import { useState } from "react";

function App() {
  const [ text, setText] = useState("");
  const [ list, setList] = useState([]);

  const addItem = () => {

  };

  return (
    <div>
      <h1>{text}</h1>
      <input 
        type="text" 
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;