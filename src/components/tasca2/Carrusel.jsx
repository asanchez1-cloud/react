import { useState } from "react";
import foto1 from '../../imatges/c1.jpg';
import foto2 from '../../imatges/c2.jpg';
import foto3 from '../../imatges/c3.jpg';
import foto4 from '../../imatges/c4.jpg';

function Exercici2() {
  const imatges = [foto1, foto2, foto3, foto4];

  const [index, setIndex] = useState(0);

  function següent() {
    if (index < 3) {
      setIndex(index + 1);
    } else {
      setIndex(0); 
    }
  }

  function anterior() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(3); 
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Carrusel</h2>
      
      <div>
        <img 
          src={imatges[index]} 
          style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
        />
      </div>

      <button onClick={anterior}>Anterior</button>
      <button onClick={següent}>Següent</button>
    </div>
  );
}

export default Exercici2;