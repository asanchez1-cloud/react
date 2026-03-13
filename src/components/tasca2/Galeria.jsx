import { useState } from "react";
import foto1 from '../../imatges/c1.jpg';
import foto2 from '../../imatges/c2.jpg';
import foto3 from '../../imatges/c3.jpg';
import foto4 from '../../imatges/c4.jpg';

function Exercici1() {
  const [imatges, setImatges] = useState([foto1, foto2, foto3, foto4]);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {imatges.map((imatge) => {
        return (
          <div key={imatge}>
            <img 
              src={imatge} 
              alt="cotxe" 
              style={{ width: '250px', height: '180px', objectFit: 'cover' }} 
            />
          </div>
        )
      })}
    </div>
  );
}

export default Exercici1;