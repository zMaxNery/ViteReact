import { use, useState } from "react";

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
    <div className="area-task">
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
  );
}

export default App;