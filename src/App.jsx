import { use, useState } from "react";
import './App.css'

function App() {
  const exercicios = import.meta.glob("./exercicios/*.jsx", { eager: true });

  return (
    <div className="page">
      <div className="card">
      </div>
    </div>
  );
}

export default App;