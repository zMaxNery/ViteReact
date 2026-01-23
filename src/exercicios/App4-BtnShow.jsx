import { useState } from "react";
import '/src/App.css'

function App() {

  // Muda cores
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

  // Botão exibir
  const [ show, setShow] = useState(false);

  const isShow = () => { setShow(!show) };

  return (
    <div className="page">
      <div className="card">
        <button
        onClick={isShow}
        style={{
          width: "90px",
          height: "30px",
          backgroundColor: "wheat"
        }}>Exibir script</button>
        { show && <div 
          className="change-color"
          style={{
            borderStyle: "double",
            borderColor: "black",
            margin: "15px",
          }}>
          <div
            style={{
              margin: "12px",
              width: "200px",
              height: "200px",
              backgroundColor: color
            }}
          ></div>
          <button
            onClick={btnBlue}
            style={{
              margin: "8px",
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
        </div> }
      </div>
    </div>
  );
}

export default App;