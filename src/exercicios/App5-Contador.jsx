import { use, useState } from "react";
import '/src/App.css'

function App() {
  const [ counter, setCounter ] = useState(0);
  
  let color = "black";

  const counterAdd = () => {
    setCounter(counter + 1);
  };

  const counterRem = () => {
    setCounter(counter - 1);
  };

  if (counter < 0) color = "red";
  if (counter > 0) color = "green";

  return (
    <div className="page">
      <div className="card">
        <h1
        style={{
          color: color
        }}>{counter}</h1>
        <button
        onClick={counterAdd}
        style={{
          margin: "10px",
          width: "22px",
          height: "22px",
          color: "white",
          fontWeight: "bold",
          fontSize: "15px",
          backgroundColor:"blueviolet"
        }}>+</button>
        <button
        onClick={counterRem}
        style={{
          width: "22px",
          height: "22px",
          color: "white",
          fontWeight: "bold",
          fontSize: "15px",
          backgroundColor:"blueviolet"
        }}>-</button>
      </div>
    </div>
  );
}

export default App;