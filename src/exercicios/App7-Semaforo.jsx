import { use, useState } from "react";

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
    <div className="area-task">
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
        }}>
      </div>
    </div>
  );
}

export default App;