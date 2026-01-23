import { use, useState } from "react";
import './App.css'

function App() {
  const [ light, setLight ] = useState("red");

  const nextColor = () => {
    switch(light) {
      case "red": return setLight("yellow");
      case "yellow": return setLight("green");
      case "green": return setLight("red");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <button 
          onClick={nextColor}
        >Avançar Sinal</button>
        <div 
          style={{
            backgroundColor: light,
            margin: "30px",
            width: "200px",
            height: "200px",
            borderStyle: "double",
            borderColor: "black",
            borderRadius: "50%"
        }}></div>
      </div>
    </div>
  );
}

export default App;