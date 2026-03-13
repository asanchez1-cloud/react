import { useState } from "react";
// Importamos las fotos (asegúrate de que la ruta sea correcta)
import foto1 from '../../imatges/c1.jpg';
import foto2 from '../../imatges/c2.jpg';
import foto3 from '../../imatges/c3.jpg';
import foto4 from '../../imatges/c4.jpg';

function Exercici2() {
  // Ponemos las fotos en una lista (array)
  const imatges = [foto1, foto2, foto3, foto4];

  // El estado para saber qué foto toca (empieza en la 0)
  const [index, setIndex] = useState(0);

  // Función para ir a la siguiente foto
  function següent() {
    if (index < 3) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Si llega al final, vuelve a la primera
    }
  }

  // Función para ir a la foto anterior
  function anterior() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(3); // Si está en la primera, va a la última
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Carrusel Simple</h2>
      
      <div>
        {/* Mostramos la imagen que toca según el número de "index" */}
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