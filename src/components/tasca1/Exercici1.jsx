import { useState } from "react";
import "./Exercici1.css";

function Exercici1() {
  const [numero, setNumero] = useState(0);

  return (
    <div className="exercici">
      <h2>{numero}</h2>
      <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
      <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
    </div>
  );
}

export default Exercici1;