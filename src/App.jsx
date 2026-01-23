import { use, useState } from "react";
import './App.css'

function App() {
  const [ user, setUser ] = useState({ name: "Visitante", status: "Offline" }); 

  return (
    <div className="page">
      <div className="card">
      </div>
    </div>
  );
}

export default App;