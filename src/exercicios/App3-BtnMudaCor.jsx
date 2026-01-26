import { useState } from "react";

function App() {
  const [ color, setColor] = useState("white");

  const btnBlue = () =>{
    if (color === "blue") {
      colorWhite();
    } else {
      setColor("blue");
    }
  };

  const btnRed = () =>{
    if (color === "red") {
      colorWhite();
    } else {
      setColor("red");
    }
  };

  const colorWhite = () => {setColor("white")};

  return (
    <div className="area-task">
      <div
        style={{
          margin: "20px",
          width: "200px",
          height: "200px",
          backgroundColor: color
        }}
      ></div>
      <button
        onClick={btnBlue}
        style={{
          width: "100px",
          height: "25px",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "blue",
        }}
      >Azul</button>
      <button
        onClick={btnRed}
        style={{
          width: "100px",
          height: "25px",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "red",
        }}
      >Vermelho</button>
    </div>
  );
}

export default App;