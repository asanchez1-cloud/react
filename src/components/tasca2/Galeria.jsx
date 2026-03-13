import { useState } from "react";
import foto1 from '../../imatges/c1.jpg';
import foto2 from '../../imatges/c2.jpg';
import foto3 from '../../imatges/c3.jpg';
import foto4 from '../../imatges/c4.jpg';

function Exercici1() {
  const [imatges, setImatges] = useState([foto1, foto2, foto3, foto4]);

  return (
    <div>
      <h2>Galeria</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {imatges.map((imatge) => (
          <div key={imatge}>
            <img 
              src={imatge} 
              alt="cotxe" 
              style={{ width: '250px', height: '180px', objectFit: 'cover' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercici1;