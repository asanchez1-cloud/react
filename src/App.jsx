import './App.css';
import { useState } from 'react';
import Carrusel from './components/tasca2/Carrusel';
import Galeria from './components/tasca2/Galeria';
import Exercici1 from './components/tasca1/Exercici1';
import Exercici2 from './components/tasca1/Exercici2';
import Exercici3 from './components/tasca1/Exercici3';
import Exercici4 from './components/tasca1/Exercici4';
import Tasca_props from './components/tasca3/Tasca_props';
import lizard from './imatges/lizard.png';
import Tasca5Repas from './components/tasca5/Tasca5_repas';

import Menu from './Menu';
function App() {
  const [tascaSeleccionada, setTascaSeleccionada] = useState("tasca 1")

  function getTascaComponent() {
    switch (tascaSeleccionada) {
      case "tasca 1":
        return <Exercici1 />
      case "tasca 2":
        return <Exercici2 />
      case "tasca 3":
        return <Exercici3 />
      case "tasca 4":
        return <Exercici4 />
      case "tasca 2.1":
        return <Galeria />
      case "tasca 2.2":
        return <Carrusel />
      case "tasca_props":
        return <div>
          <Tasca_props imatge={lizard} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
          <Tasca_props imatge={lizard} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
          <Tasca_props imatge={lizard} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
          <Tasca_props imatge={lizard} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
          <Tasca_props imatge={lizard} titol="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
        </div>
      case "tasca4_grid":
        return <Tasca4Grid />
      case "tasca5_repas":
        return <Tasca5Repas />
        
        default:
      return null
    }
  }
  return (
    <div>
      <Menu canviarTasca={setTascaSeleccionada} />
      {getTascaComponent()}
    </div>
  )
}

export default App;