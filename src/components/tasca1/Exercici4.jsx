 import { useState } from "react";
import "./Exercici4.css";
import imatge1 from "../../imatges/imatge1.png";
import imatge2 from "../../imatges/imatge2.png";

function Exercici4() {
  const [canviada, setCanviada] = useState(false);

  return (
    <div className="exercici">
      <img
        src={canviada ? imatge2 : imatge1}
        alt="Imatge"
        className="imatge"
      />

      <br />

      <button onClick={() => setCanviada(!canviada)}>
        Canviar imatge
      </button>
    </div>
  );
}

export default Exercici4;