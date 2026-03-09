import { useState } from "react";
import "./Exercici3.css";

function Exercici3() {
  const [negreta, setNegreta] = useState(false);
  const [cursiva, setCursiva] = useState(false);
  const [subratllat, setSubratllat] = useState(false);

  return (
    <div className="exercici">
      <p
        className={`
          ${negreta ? "bold" : ""}
          ${cursiva ? "italic" : ""}
          ${subratllat ? "underline" : ""}
        `}
      >
        Lorem Ipsum
      </p>

      <button onClick={() => setNegreta(!negreta)}>Negreta</button>
      <button onClick={() => setCursiva(!cursiva)}>Cursiva</button>
      <button onClick={() => setSubratllat(!subratllat)}>Subratllat</button>
    </div>
  );
}

export default Exercici3;