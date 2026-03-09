import { useState } from "react";
import "./Exercici2.css";

function Exercici2() {
  const [color, setColor] = useState("gris");

  return (
    <div className="exercici">
      <div className={`cercle ${color}`}></div>

      <button onClick={() => setColor("vermell")}>Vermell</button>
      <button onClick={() => setColor("blau")}>Blau</button>
      <button onClick={() => setColor("verd")}>Verd</button>
    </div>
  );
}

export default Exercici2;